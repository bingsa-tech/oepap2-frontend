<template>
  <header class="bg-white shadow-sm fixed top-0 inset-x-0 z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 class="text-2xl font-bold text-blue-600">OEPAPD2</h1>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex gap-6 text-gray-700 font-medium">
        <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        <RouterLink to="/news" class="hover:text-blue-600">News</RouterLink>
        <RouterLink to="/profile" class="hover:text-blue-600">Profil</RouterLink>
      </nav>

      <!-- Mobile menu button -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-gray-700"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
      <RouterLink @click="close" to="/" class="block text-gray-700">Home</RouterLink>
      <RouterLink @click="close" to="/news" class="block text-gray-700">News</RouterLink>
      <RouterLink @click="close" to="/profile" class="block text-gray-700">Profil</RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);
const close = () => (menuOpen.value = false);
</script>
