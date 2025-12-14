<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="py-20 bg-white animate-fade-up">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        Domaines d’intervention
      </h2>

      <div class="grid gap-6 md:grid-cols-4">

        <RouterLink
          to="/domains/security"
          class="block p-6 rounded-xl border bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
        >
          <h3 class="font-semibold mb-3 text-gray-900">Sécurité</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Prévention des conflits, protection des civils,
            lutte contre l’extrémisme violent.
          </p>
        </RouterLink>

        <RouterLink
          to="/domains/hamanitarian"
          class="block p-6 rounded-xl border bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
        >
          <h3 class="font-semibold mb-3 text-gray-900">Humanitaire</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Réponse aux crises, aide d’urgence,
            résilience communautaire.
          </p>
        </RouterLink>

        <RouterLink
          to="/domains/peace"
          class="block p-6 rounded-xl border bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
        >
          <h3 class="font-semibold mb-3 text-gray-900">Paix</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Médiation, réconciliation,
            transformation des conflits.
          </p>
        </RouterLink>

        <RouterLink
          to="/domains/subtainabledev"
          class="block p-6 rounded-xl border bg-white transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
        >
          <h3 class="font-semibold mb-3 text-gray-900">Développement durable</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            ODD, climat, inclusion sociale,
            croissance verte.
          </p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Suppression des directives @apply et de la classe .domain-card */

/* Animation globale (Conserver l'animation est correct) */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 0.9s ease-out both;
}
</style>
