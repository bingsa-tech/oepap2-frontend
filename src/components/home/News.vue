<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <div class="mb-12 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
          Actualités & Actions de terrain
        </h2>
        <p class="mt-4 text-gray-600 max-w-3xl mx-auto">
          Suivez les initiatives, missions et programmes de l’OEPAPD2
          en matière de sécurité, d’action humanitaire, de paix et de développement durable
          à travers le continent africain.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="item in news"
          :key="item.id"
          class="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
        >
          <img
            :src="item.image"
            alt=""
            class="h-48 w-full object-cover"
          />

          <div class="p-6">
            <span
              class="inline-block text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2"
            >
              {{ item.category }}
            </span>

            <h3 class="text-xl font-semibold text-gray-900">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 text-sm mt-3 mb-5">
              {{ item.description }}
            </p>

            <RouterLink
              :to="`/news/${item.id}`"
              class="text-blue-600 hover:underline text-sm font-semibold"
            >
              Lire le communiqué →
            </RouterLink>
          </div>
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
    category: "Paix & Sécurité",
    title: "L’OEPAPD2 lance une initiative régionale de prévention des conflits",
    description:
      "Un programme stratégique visant à renforcer les capacités nationales et communautaires
      pour prévenir l’extrémisme violent et consolider la paix durable.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba02fca1e1",
  },
  {
    id: 2,
    category: "Humanitaire",
    title: "Mission humanitaire en zones affectées par les crises",
    description:
      "Déploiement d’actions humanitaires intégrées pour soutenir les populations vulnérables
      à travers l’accès à l’eau, à la santé et à la protection psychosociale.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    id: 3,
    category: "Développement durable",
    title: "Renforcement des stratégies de réintégration communautaire",
    description:
      "Appui aux États africains dans la mise en œuvre de programmes de réintégration sociale,
      économique et environnementale post-conflit.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
]);
</script>
