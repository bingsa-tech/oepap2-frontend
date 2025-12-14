<script setup lang="ts">
import Header from "../components/Layout/Header.vue";


import Security from "../components/domains/Security.vue";
import Humanitarian from "../components/domains/Hamanitarian.vue";
import Peace from "../components/domains/Peace.vue";
import SustainableDev from "../components/domains/SubtainableDev.vue";
</script>

<template>
  <Header />

  <section class="pt-32 pb-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 space-y-10">
      <h1 class="text-4xl font-extrabold text-center">
        Domaines d’expertise et d’intervention
      </h1>

      <div class="grid lg:grid-cols-2 gap-10">
        <Security />
        <Humanitarian />
        <Peace />
        <SustainableDev />
      </div>
    </div>
  </section>


</template>
