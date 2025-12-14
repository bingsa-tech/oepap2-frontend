<template>
  <section class="relative py-24 bg-white overflow-hidden">
    <!-- Décor léger -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
    </div>

    <div
      class="relative max-w-6xl mx-auto px-6 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      ref="visionBlock"
    >
      <span class="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
        Notre vision
      </span>

      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Construire une Afrique pacifique,
        <span class="text-blue-600">résiliente et prospère</span>
      </h2>

      <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        OEPAPD2 œuvre pour une Afrique où la paix, la sécurité et le développement durable
        ne sont pas des idéaux lointains, mais des réalités concrètes au service des peuples.
      </p>

      <div class="mt-10 grid md:grid-cols-3 gap-8">
        <div class="p-6 rounded-2xl border bg-gray-50 hover:shadow-md transition">
          <h3 class="font-semibold text-gray-900 mb-2">Paix & Sécurité</h3>
          <p class="text-sm text-gray-600">
            Des sociétés stables, protégées et capables de prévenir durablement les conflits.
          </p>
        </div>

        <div class="p-6 rounded-2xl border bg-gray-50 hover:shadow-md transition">
          <h3 class="font-semibold text-gray-900 mb-2">Intégration régionale</h3>
          <p class="text-sm text-gray-600">
            Une coopération africaine renforcée pour des réponses collectives aux défis communs.
          </p>
        </div>

        <div class="p-6 rounded-2xl border bg-gray-50 hover:shadow-md transition">
          <h3 class="font-semibold text-gray-900 mb-2">Développement durable</h3>
          <p class="text-sm text-gray-600">
            Une croissance inclusive, respectueuse de l’environnement et centrée sur l’humain.
          </p>
        </div>
      </div>

      <p class="mt-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
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

const visionBlock = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!visionBlock.value) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visionBlock.value?.classList.remove("opacity-0", "translate-y-6");
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(visionBlock.value);
});
</script>
