<template>
  <div class="max-w-md mx-auto mt-20 p-6 border rounded">
    <h2 class="text-2xl mb-4">Se connecter</h2>
    <form @submit.prevent="submit">
      <input v-model="form.email" placeholder="Email" type="email" class="w-full p-2 border mb-3" />
      <input v-model="form.password" placeholder="Mot de passe" type="password" class="w-full p-2 border mb-3" />
      <button class="w-full p-2 bg-blue-600 text-white rounded">Connexion</button>
    </form>
    <p class="mt-3 text-sm">Pas de compte ? <router-link to="/register" class="text-blue-600">Inscription</router-link></p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import api from '../../utils/api';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const form = ref({ email: '', password: '' });
    const auth = useAuthStore();
    const router = useRouter();

    const submit = async () => {
      try {
        const res = await api.post('/auth/login', form.value);
        // attend { user, access_token }
        const token = res.data.access_token || res.data.token || res.data.accessToken;
        const user = res.data.user;
        auth.setAuth(token, user);
        router.push({ name: 'Profile' });
      } catch (err: any) {
        alert(err?.response?.data?.message || 'Erreur de connexion');
      }
    };

    return { form, submit };
  },
};
</script>
