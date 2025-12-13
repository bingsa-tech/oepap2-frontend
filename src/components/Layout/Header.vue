<template>
  <header class="bg-white shadow-sm fixed top-0 inset-x-0 z-50">
    
    <div class="bg-gray-800 text-white text-sm py-1.5 hidden md:block">
      <div class="max-w-7xl mx-auto px-6 flex justify-end space-x-4">
        
        <a 
          href="[LIEN_TWITTER]" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-blue-400 transition"
        >
          <i class="fab fa-twitter"></i> Twitter 
        </a>

        <a 
          href="[LIEN_FACEBOOK]" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-blue-600 transition"
        >
          <i class="fab fa-facebook-f"></i> Facebook
        </a>

        <a 
          href="[LIEN_WHATSAPP]" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-green-400 transition"
        >
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        
        <a 
          href="[LIEN_INSTAGRAM]" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="hover:text-pink-500 transition"
        >
          <i class="fab fa-instagram"></i> Instagram
        </a>
        
      </div>
    </div>
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 class="text-2xl font-bold text-blue-600">OEPAPD2</h1>

      <nav class="hidden md:flex gap-6 text-gray-700 font-medium">
        <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
        <RouterLink to="/news" class="hover:text-blue-600">News</RouterLink>
        <RouterLink to="/profile" class="hover:text-blue-600">Profil</RouterLink>
      </nav>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-gray-700"
      >
        ☰
      </button>
    </div>

    <div v-if="menuOpen" class="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
      <RouterLink @click="close" to="/" class="block text-gray-700 hover:text-blue-600">Home</RouterLink>
      <RouterLink @click="close" to="/about" class="block text-gray-700 hover:text-blue-600">About</RouterLink>
      <RouterLink @click="close" to="/news" class="block text-gray-700 hover:text-blue-600">News</RouterLink>
      <RouterLink @click="close" to="/profile" class="block text-gray-700 hover:text-blue-600">Profil</RouterLink>
      
      <div class="pt-4 flex justify-around border-t border-gray-100">
        <a href="[LIEN_TWITTER]" class="text-gray-700 hover:text-blue-600"><i class="fab fa-twitter text-xl"></i></a>
        <a href="[LIEN_FACEBOOK]" class="text-gray-700 hover:text-blue-600"><i class="fab fa-facebook-f text-xl"></i></a>
        <a href="[LIEN_WHATSAPP]" class="text-gray-700 hover:text-blue-600"><i class="fab fa-whatsapp text-xl"></i></a>
        <a href="[LIEN_INSTAGRAM]" class="text-gray-700 hover:text-blue-600"><i class="fab fa-instagram text-xl"></i></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);
const close = () => (menuOpen.value = false);
</script>
