<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div
      class="max-w-6xl w-full grid md:grid-cols-2 gap-10 shadow-2xl rounded-xl overflow-hidden bg-white"
    >

      <!-- COLONNE GAUCHE : Widget information -->
      <div
        class="hidden md:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-10 space-y-6"
      >
        <h2 class="text-4xl font-extrabold">Bienvenue sur OEPAPD2</h2>

        <p class="text-lg leading-relaxed text-blue-100">
          Connectez-vous pour accéder aux espaces dédiés à la
          sécurité, l’action humanitaire, la paix et le développement durable.
        </p>

        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2">
            <span class="bg-white/30 p-1 rounded-full">✓</span>
            Accès aux actualités et publications
          </li>
          <li class="flex items-center gap-2">
            <span class="bg-white/30 p-1 rounded-full">✓</span>
            Suivi des projets et interventions
          </li>
          <li class="flex items-center gap-2">
            <span class="bg-white/30 p-1 rounded-full">✓</span>
            Partenariats & opportunités de collaboration
          </li>
        </ul>
      </div>

      <!-- COLONNE DROITE : Formulaire -->
      <div class="p-10">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">
          Connexion
        </h2>

        <form @submit.prevent="submit" class="space-y-4">
          <div>
            <label class="block text-gray-600 mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Votre adresse email"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
            />
          </div>

          <div>
            <label class="block text-gray-600 mb-1">Mot de passe</label>
            <input
              v-model="form.password"
              type="password"
              placeholder="Votre mot de passe"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Se connecter
          </button>
        </form>

        <p class="mt-4 text-sm text-gray-600">
          Pas encore de compte ?
          <router-link to="/register" class="text-blue-600 hover:underline">
            Créer un compte
          </router-link>
        </p>
      </div>

    </div>
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
