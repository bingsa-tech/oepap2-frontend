<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      class="max-w-6xl w-full grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <!-- LEFT : INFO / WIDGET -->
      <div
        class="hidden md:flex flex-col justify-between bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10"
      >
        <div>
          <h2 class="text-3xl font-extrabold mb-6">
            OEPAPD2
          </h2>

          <p class="text-gray-300 leading-relaxed mb-6">
            Organisation panafricaine engagée pour la
            <strong>Sécurité</strong>, l’
            <strong>Humanitaire</strong>, la
            <strong>Paix</strong> et le
            <strong>Développement Durable</strong>.
          </p>

          <ul class="space-y-4 text-sm text-gray-200">
            <li class="flex items-start gap-3">
              <span class="mt-1">✔</span>
              Renforcement des capacités & gouvernance
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1">✔</span>
              Paix, sécurité et résilience communautaire
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1">✔</span>
              Développement durable & inclusion
            </li>
          </ul>
        </div>

        <p class="text-xs text-gray-400 mt-10">
          © {{ new Date().getFullYear() }} OEPAPD2 — Tous droits réservés
        </p>
      </div>

      <!-- RIGHT : FORM -->
      <div class="p-8 md:p-12 flex items-center">
        <div class="w-full max-w-md mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Créer un compte
          </h2>
          <p class="text-gray-600 mb-8">
            Rejoignez la plateforme OEPAPD2
          </p>

          <form @submit.prevent="submit" class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Votre nom"
                class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="email@exemple.com"
                class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                v-model="form.password"
                type="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              S’inscrire
            </button>
          </form>

          <p class="mt-6 text-sm text-center text-gray-600">
            Déjà inscrit ?
            <router-link
              to="/login"
              class="text-blue-600 font-medium hover:underline"
            >
              Connexion
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
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
