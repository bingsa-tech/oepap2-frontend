<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Titre -->
      <div class="text-center mb-14 animate-fade-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
          Notre mission
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
          Renforcer et transformer les capacités d’action pour répondre aux crises complexes,
          consolider la paix et favoriser un développement durable.
        </p>
      </div>

      <!-- Texte mission -->
      <div class="max-w-4xl mx-auto text-center mb-16 animate-fade-up delay-100">
        <p class="text-gray-800 text-lg leading-relaxed">
          L’OEPAPD2 soutient les acteurs étatiques et non étatiques afin de renforcer
          leurs capacités à répondre aux crises, conduire des actions humanitaires,
          consolider la paix et favoriser le développement durable.
        </p>

        <p class="mt-6 text-gray-600 text-base leading-relaxed">
          Notre mission va au-delà du simple appui opérationnel :
          nous visons à
          <span class="font-semibold text-blue-700">
            transformer durablement les capacités d’action sur le terrain
          </span>,
          afin de garantir des réponses efficaces, inclusives et ancrées dans les réalités locales.
        </p>
      </div>

      <!-- Piliers -->
      <div class="grid md:grid-cols-3 gap-8">

        <!-- Pilier 1 -->
        <div class="bg-gray-50 p-6 rounded-2xl border hover:shadow-md transition animate-fade-up delay-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            Autonomisation & Inclusion
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Nous œuvrons à l’autonomisation stratégique des Forces Publiques de Sécurité et de Défense,
            ainsi que des femmes, des jeunes, de la société civile et des institutions académiques,
            reconnus comme acteurs clés de la paix et de la résilience.
          </p>
        </div>

        <!-- Pilier 2 -->
        <div class="bg-gray-50 p-6 rounded-2xl border hover:shadow-md transition animate-fade-up delay-300">
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            Action intégrée
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Notre approche est multidimensionnelle et coordonnée, intégrant les dimensions
            sécuritaires, humanitaires, sociales et environnementales afin d’assurer
            des réponses cohérentes et efficaces aux crises.
          </p>
        </div>

        <!-- Pilier 3 -->
        <div class="bg-gray-50 p-6 rounded-2xl border hover:shadow-md transition animate-fade-up delay-400">
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            Paix & développement durable
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Des acteurs renforcés contribuent à la construction d’une paix durable,
            condition essentielle à un développement inclusif, à la stabilité
            et à la prospérité du continent africain.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out both;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
</style>
