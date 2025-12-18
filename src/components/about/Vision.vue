<template>
  <section class="relative py-24 bg-white overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
    </div>

    <div
      class="relative max-w-6xl mx-auto px-6 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      ref="visionBlock"
    >
      <span class="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
        Notre vision
      </span>

      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Construire une Afrique pacifique,
        <span class="text-blue-600">résiliente et prospère</span>
      </h2>


      <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        OEPAPD2 œuvre pour une Afrique où la paix, la sécurité et le développement durable
        ne sont pas des idéaux lointains, mais des réalités concrètes au service des peuples.
      </p>

      <div class="mt-12 grid md:grid-cols-3 gap-8">
        <div class="p-8 rounded-2xl border bg-gray-50 hover:shadow-lg hover:border-blue-300 transition duration-300">
          <h3 class="font-bold text-xl text-gray-900 mb-2">Paix & Sécurité</h3>
          <p class="text-sm text-gray-600 leading-snug">
            Des sociétés stables, protégées et capables de prévenir durablement les conflits.
          </p>
        </div>

        <div class="p-8 rounded-2xl border bg-gray-50 hover:shadow-lg hover:border-blue-300 transition duration-300">
          <h3 class="font-bold text-xl text-gray-900 mb-2">Intégration régionale</h3>
          <p class="text-sm text-gray-600 leading-snug">
            Une coopération africaine renforcée pour des réponses collectives aux défis communs.
          </p>
        </div>

        <div class="p-8 rounded-2xl border bg-gray-50 hover:shadow-lg hover:border-blue-300 transition duration-300">
          <h3 class="font-bold text-xl text-gray-900 mb-2">Développement durable</h3>
          <p class="text-sm text-gray-600 leading-snug">
            Une croissance inclusive, respectueuse de l’environnement et centrée sur l’humain.
          </p>
        </div>
      </div>

      <p class="mt-16 text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg font-medium">
        Notre ambition est de positionner <strong>OEPAPD2</strong> comme une référence régionale
        et internationale en matière de paix, de sécurité, d’action humanitaire et
        de développement durable, en accompagnant les États, les institutions et les communautés
        vers un avenir commun fondé sur la dignité, la stabilité et la prospérité partagée.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// Référence au bloc HTML que nous voulons observer pour l'animation
const visionBlock = ref<HTMLElement | null>(null);

onMounted(() => {
  // Sécurité: Si la référence n'est pas encore établie, on sort
  if (!visionBlock.value) return;

  // Création de l'Intersection Observer
  const observer = new IntersectionObserver(
    // La fonction de rappel reçoit un tableau d'entrées
    ([entry]) => {
      // CORRECTION: Nous vérifions si 'entry' existe ET s'il est dans le viewport.
      // Cela satisfait le compilateur TypeScript en mode strict.
      if (entry && entry.isIntersecting) {
        // Enlève les classes initiales d'opacité et de translation pour déclencher l'animation
        visionBlock.value?.classList.remove("opacity-0", "translate-y-6");

        // Arrête d'observer le bloc après la première apparition
        observer.disconnect();
      }
    },
    { threshold: 0.2 } // Déclenche l'animation lorsque 20% du bloc est visible
  );

  // Démarre l'observation sur l'élément référencé
  observer.observe(visionBlock.value);
});
</script>
