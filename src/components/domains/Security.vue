<template>
  <Transition
    appear
    enter-active-class="transition duration-700 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
  >
    <section class="bg-white rounded-2xl shadow p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">
        Sécurité
      </h3>

      <ul class="space-y-3 text-gray-700 list-disc pl-6">
        <li>Prévention des conflits</li>
        <li>Rétablissement et consolidation de la paix</li>
        <li>Protection des civils</li>
        <li>Lutte contre la radicalisation, l’extrémisme violent et le terrorisme</li>
        <li>Lutte contre la délinquance juvénile et la criminalité enfantine</li>
        <li>Intégration de la sécurité dans le développement durable</li>
        <li>
          Formation et renforcement des capacités des Forces Publiques de Sécurité
          et de Défense (FPSD) et des civils en Opérations de Paix (OP)
        </li>
      </ul>
    </section>
  </Transition>
</template>

<script setup lang="ts">
</script>
