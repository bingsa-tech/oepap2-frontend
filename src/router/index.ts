import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Profile from '../views/Profile.vue';
import { useAuthStore } from '../stores/auth';
import NewsDetail from "../views/NewsDetail.vue";

// CORRECTION ici : Assurez-vous que le chemin est correct.
// Si News.vue est une page complète, il est recommandé de l'importer depuis '../views/'.
// J'ai renommé l'import pour suivre la convention des autres vues.
import News from '../views/News.vue' 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login, meta: { guest: true } },
  { path: '/register', name: 'Register', component: Register, meta: { guest: true } },
  
  // Route pour la liste des actualités
  { path: '/news', name: 'News', component: News },
  
  // Route pour le détail des actualités
  { path: '/news/:id', name: 'news-detail', component: NewsDetail },
  
  { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard (Logique conservée, elle est correcte)
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const token = auth.token;
  
  // 1. Protection des routes nécessitant une authentification (requiresAuth)
  if (to.meta.requiresAuth && !token) {
    return next({ name: 'Login' });
  }
  
  // 2. Protection des routes d'invité (guest)
  if (to.meta.guest && token) {
    return next({ name: 'Profile' });
  }
  
  // Continuer la navigation
  next();
});

export default router;
