import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Profile from '../views/Profile.vue';
import { useAuthStore } from '../stores/auth';
import NewsDetail from "../views/NewsDetail.vue";
import Domains from '../views/Domains.vue';
import Mission from '../components/about/Mission.vue';
import Contact from '../views/Contact.vue';
import Security from '../components/domains/Security.vue';
import Hamanitarian from '../components/domains/Hamanitarian.vue';
import Peace from '../components/domains/Peace.vue';
import SubtainableDev from '../components/domains/SubtainableDev.vue';
// CORRECTION ici : Assurez-vous que le chemin est correct.
// Si News.vue est une page complète, il est recommandé de l'importer depuis '../views/'.
// J'ai renommé l'import pour suivre la convention des autres vues.
import News from '../views/News.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {path : '/domains', name: 'Domains', component: Domains},
  {path : '/mission', name: 'Mission', component: Mission},
  {path : '/contact', name: 'Contact', component: Contact},
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'Login', component: Login, meta: { guest: true } },
  { path: '/register', name: 'Register', component: Register, meta: { guest: true } },
  {path : '/domains/security', name: 'Security', component: Security},
  {path : '/domains/hamanitarian', name: 'Hamanitarian', component: Hamanitarian},
  {path : '/domains/peace', name: 'Peace', component: Peace},
  {path : '/domains/subtainabledev', name: 'SubtainableDev', component: SubtainableDev},
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
