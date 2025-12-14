<template>
  <Transition
    appear
    enter-active-class="transition duration-700 ease-out delay-100"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
  >
    <section class="bg-white rounded-2xl shadow p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">
        Humanitaire
      </h3>

      <ul class="space-y-3 text-gray-700 list-disc pl-6">
        <li>Réponse immédiate aux catastrophes naturelles et crises humanitaires</li>
        <li>Réduction des conséquences des catastrophes naturelles</li>
        <li>Secours et fourniture de vivres, eau et abris</li>
        <li>Soins de santé et soutien psychosocial aux populations vulnérables</li>
        <li>Amélioration des infrastructures, de l’éducation et des conditions de vie</li>
        <li>Renforcement de la gestion communautaire des risques de catastrophes</li>
        <li>Préparation, recherche, sauvetage et prépositionnement des secours</li>
        <li>Renforcement des cadres politiques nationaux et régionaux</li>
        <li>Cartographie des risques et vulnérabilités</li>
        <li>Protection des moyens de subsistance</li>
      </ul>
    </section>
  </Transition>
</template>

<script setup lang="ts">
</script>
