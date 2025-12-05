import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Profile from '../views/Profile.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login, meta: { guest: true } },
  { path: '/register', name: 'Register', component: Register, meta: { guest: true } },
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
  if (to.meta.requiresAuth && !token) {
    return next({ name: 'Login' });
  }
  if (to.meta.guest && token) {
    return next({ name: 'Profile' });
  }
  next();
});

export default router;
