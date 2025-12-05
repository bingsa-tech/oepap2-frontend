<template>
  <div class="max-w-md mx-auto mt-20 p-6 border rounded">
    <h2 class="text-2xl mb-4">Inscription</h2>
    <form @submit.prevent="submit">
      <input v-model="form.name" placeholder="Nom" class="w-full p-2 border mb-3" />
      <input v-model="form.email" placeholder="Email" type="email" class="w-full p-2 border mb-3" />
      <input v-model="form.password" placeholder="Mot de passe" type="password" class="w-full p-2 border mb-3" />
      <button class="w-full p-2 bg-green-600 text-white rounded">S'inscrire</button>
    </form>
    <p class="mt-3 text-sm">Déjà inscrit ? <router-link to="/login" class="text-blue-600">Connexion</router-link></p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import api from '../../utils/api';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const form = ref({ name: '', email: '', password: '' });
    const auth = useAuthStore();
    const router = useRouter();

    const submit = async () => {
      try {
        const res = await api.post('/auth/register', form.value);
        const token = res.data.access_token || res.data.token;
        const user = res.data.user;
        auth.setAuth(token, user);
        router.push({ name: 'Profile' });
      } catch (err: any) {
        alert(err?.response?.data?.message || 'Erreur inscription');
      }
    };

    return { form, submit };
  },
};
</script>
