<template>
  <section class="min-h-screen pt-28 pb-24 bg-gradient-to-b from-gray-50 to-gray-100">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-14">
        <h1 class="text-4xl font-extrabold text-gray-900">
          Contactez-nous
        </h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Une question, un partenariat ou une collaboration ?
          L’équipe OEPAPD2 est à votre écoute.
        </p>
      </div>

      <!-- Formulaire -->
      <form
        @submit.prevent="submit"
        class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >

        <!-- Email -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Adresse email *
          </label>
          <input
            v-model="form.email"
            type="email"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            placeholder="mail"
          />
          <p v-if="errors.email" class="text-red-600 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Téléphone -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Numéro de téléphone *
          </label>
          <input
            v-model="form.phone"
            type="tel"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            placeholder="phone number"
          />
          <p v-if="errors.phone" class="text-red-600 text-sm mt-1">
            {{ errors.phone }}
          </p>
        </div>

        <!-- Ville & Pays -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              Ville *
            </label>
            <input
              v-model="form.city"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            />
            <p v-if="errors.city" class="text-red-600 text-sm mt-1">
              {{ errors.city }}
            </p>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              Pays *
            </label>
            <input
              v-model="form.country"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            />
            <p v-if="errors.country" class="text-red-600 text-sm mt-1">
              {{ errors.country }}
            </p>
          </div>
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            v-model="form.message"
            rows="5"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
            placeholder="Votre message..."
          ></textarea>
          <p v-if="errors.message" class="text-red-600 text-sm mt-1">
            {{ errors.message }}
          </p>
        </div>

        <!-- Bouton -->
        <button
          type="submit"
          class="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
        >
          Envoyer le message
        </button>

      </form>

    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  email: "",
  phone: "",
  city: "",
  country: "",
  message: "",
});

const errors = reactive<Record<string, string>>({});

const submit = () => {
  Object.keys(errors).forEach(key => delete errors[key]);

  if (!form.email) errors.email = "Email requis";
  if (!form.phone) errors.phone = "Téléphone requis";
  if (!form.city) errors.city = "Ville requise";
  if (!form.country) errors.country = "Pays requis";
  if (!form.message) errors.message = "Message requis";

  if (Object.keys(errors).length > 0) return;

  alert("Message envoyé avec succès !");
};
</script>
