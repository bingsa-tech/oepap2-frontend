<template>
  <section class="relative pt-32 pb-24 bg-gray-900 text-white overflow-hidden">
    
    <!-- Background image -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
        alt="Afrique paix développement"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/70"></div>
    </div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <!-- Text -->
      <div>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Œuvrer pour la
          <span class="text-blue-400">Sécurité</span>,
          l’<span class="text-blue-400">Humanitaire</span>,
          la <span class="text-blue-400">Paix</span> et le
          <span class="text-blue-400">Développement Durable</span>
          en Afrique
        </h1>

        <p class="mt-6 text-lg text-gray-300">
          L’<strong>OEPAPD2</strong> est une ONG panafricaine de coopération internationale
          qui accompagne les États africains, les institutions et les communautés
          dans la prévention des conflits, l’action humanitaire,
          la consolidation de la paix et le développement durable.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink
            to="/about"
            class="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition"
          >
            Qui sommes-nous
          </RouterLink>

          <RouterLink
            to="/mission"
            class="border border-white/60 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Notre mission
          </RouterLink>
        </div>
      </div>

      <!-- Key points -->
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-5">
        <h3 class="text-xl font-semibold mb-4">Notre Nexus SHPD2</h3>

        <ul class="space-y-3 text-gray-200">
          <li>✔ Sécurité et prévention des conflits</li>
          <li>✔ Actions humanitaires et résilience</li>
          <li>✔ Paix durable et réconciliation</li>
          <li>✔ Développement durable et inclusion</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
