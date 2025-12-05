<template>
  <section class="pt-28 pb-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

      <div>
        <h1 class="text-4xl font-extrabold text-gray-900 leading-tight">
          Bienvenue sur <span class="text-blue-600">OEPAP</span>
        </h1>
        <p class="mt-5 text-lg text-gray-600">
          Découvrez les dernières actualités, services et outils disponibles sur notre plateforme.
        </p>

        <div class="mt-8 flex gap-4">
          <RouterLink
            to="/news"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Voir les actualités
          </RouterLink>

          <RouterLink
            to="/register"
            class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Créer un compte
          </RouterLink>
        </div>
      </div>

      <img
        src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
        alt="App screenshot"
        class="rounded-xl shadow-xl border"
      />

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
