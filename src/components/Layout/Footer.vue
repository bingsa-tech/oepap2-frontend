<template>
  <footer class="bg-gray-900 text-gray-300 py-10 mt-20">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

      <div>
        <h2 class="text-xl font-semibold mb-4 text-white">OEPAP</h2>
        <p class="text-sm">
          Plateforme d'information, d'actualité et de gestion de services.
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">Liens rapides</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-white">Accueil</RouterLink></li>
          <li><RouterLink to="/news" class="hover:text-white">Actualités</RouterLink></li>
          <li><RouterLink to="/profile" class="hover:text-white">Profil</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">Contact</h3>
        <p class="text-sm">Email : contact@oepap.com</p>
        <p class="text-sm mt-1">Téléphone : +243 000 000 000</p>
      </div>

    </div>

    <p class="text-center text-xs mt-10 border-t border-gray-700 pt-6">
      © 2025 OEPAP — Tous droits réservés.
    </p>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
