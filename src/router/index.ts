import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Profile from '../views/Profile.vue';
import { useAuthStore } from '../stores/auth';
import NewsDetail from "../views/NewsDetail.vue";
import News from '../home/News.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login, meta: { guest: true } },
  { path: '/register', name: 'Register', component: Register, meta: { guest: true } },
  
  // Correction ici : Retrait de 'meta:{guest: true}'
  { path: '/news/:id', name: 'news-detail', component: NewsDetail },
  { path: '/news', name: 'News', component: News},
  { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const token = auth.token;
  
  // 1. Protection des routes nécessitant une authentification (requiresAuth)
  if (to.meta.requiresAuth && !token) {
    // Si la route nécessite un utilisateur connecté mais qu'il n'y a pas de token, rediriger vers Login
    return next({ name: 'Login' });
  }
  
  // 2. Protection des routes d'invité (guest)
  if (to.meta.guest && token) {
    // Si la route est destinée aux invités (Login, Register) mais que l'utilisateur est connecté, rediriger vers Profile
    return next({ name: 'Profile' });
  }
  
  // Continuer la navigation
  next();
});

export default router;
