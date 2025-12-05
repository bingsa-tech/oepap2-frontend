<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <h2 class="text-3xl font-bold text-gray-900 mb-10">
        Dernières actualités
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="item in news"
          :key="item.id"
          class="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <img :src="item.image" class="rounded-md mb-4" />

          <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
          <p class="text-gray-600 text-sm mt-2 mb-4">
            {{ item.description }}
          </p>

          <RouterLink
            :to="`/news/${item.id}`"
            class="text-blue-600 hover:underline text-sm font-medium"
          >
            Lire plus →
          </RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const news = ref([
  {
    id: 1,
    title: "Lancement officiel de OEPAP",
    description: "Découvrez les fonctionnalités de notre nouvelle plateforme.",
    image: "https://picsum.photos/400/250?1",
  },
  {
    id: 2,
    title: "Nouveaux services disponibles",
    description: "Nous ajoutons régulièrement de nouveaux outils.",
    image: "https://picsum.photos/400/250?2",
  },
  {
    id: 3,
    title: "Mise à jour de sécurité",
    description: "Une mise à jour améliore la sécurité de vos données.",
    image: "https://picsum.photos/400/250?3",
  },
]);
</script>
