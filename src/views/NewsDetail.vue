<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const newsId = route.params.id;

// plus tard → appel API
const article = {
  title: "Initiative régionale pour la consolidation de la paix",
  category: "Paix & Sécurité",
  image: "https://images.unsplash.com/photo-1509099836639-18ba02fca1e1",
  content: `
    L’OEPAPD2 déploie une initiative stratégique visant à renforcer
    les capacités nationales et communautaires pour prévenir les conflits,
    lutter contre l’extrémisme violent et promouvoir une paix durable.
  `,
};
</script>

<template>
  <section class="pt-32 pb-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">

      <p class="text-sm uppercase font-semibold text-blue-600 mb-3">
        {{ article.category }}
      </p>

      <h1 class="text-4xl font-extrabold text-gray-900 mb-6">
        {{ article.title }}
      </h1>

      <img
        :src="article.image"
        class="rounded-2xl mb-8 w-full object-cover"
      />

      <div class="prose max-w-none text-gray-700">
        {{ article.content }}
      </div>

    </div>
  </section>
</template>

