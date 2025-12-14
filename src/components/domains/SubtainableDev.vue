<template>
  <Transition
    appear
    enter-active-class="transition duration-700 ease-out delay-300"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
  >
    <section class="bg-white rounded-2xl shadow p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">
        Développement durable
      </h3>

      <div class="grid md:grid-cols-2 gap-6 text-gray-700">
        <ul class="space-y-3 list-disc pl-6">
          <li>Investissement dans les piliers économique, social et environnemental</li>
          <li>Accompagnement des États vers les ODD (Agenda 2030)</li>
          <li>Agenda Afrique 2063</li>
          <li>Création d’emplois durables</li>
          <li>Inclusion sociale et égalité des genres</li>
          <li>Modèles économiques durables</li>
          <li>Climat, biodiversité, eau et énergie renouvelable</li>
          <li>Agriculture et sécurité alimentaire</li>
        </ul>

        <ul class="space-y-3 list-disc pl-6">
          <li>Gestion des ressources naturelles</li>
          <li>Pollution, déchets et économie circulaire</li>
          <li>Environnement urbain</li>
          <li>Tourisme durable</li>
          <li>Transport et industrie verte</li>
          <li>Technologies environnementales</li>
          <li>Substitution des ressources non renouvelables</li>
          <li>Réutilisation et recyclage des matériaux</li>
        </ul>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
</script>
