<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 mt-24">

    <!-- Top -->
    <div class="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

      <!-- Présentation -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">
          OEPAPD2
        </h2>
        <p class="text-sm leading-relaxed">
          Organisation non gouvernementale panafricaine de coopération
          internationale pour le développement, œuvrant pour la
          <strong class="text-gray-200">
            Sécurité, l’Humanitaire, la Paix et le Développement Durable
          </strong>
          en Afrique.
        </p>
      </div>

      <!-- Mission -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">
          Notre mission
        </h3>
        <p class="text-sm leading-relaxed">
          Accompagner les États africains, les institutions et les communautés
          dans la prévention des conflits, la gestion des crises, la consolidation
          de la paix et la construction d’un développement durable inclusif.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">
          Accès rapide
        </h3>
        <ul class="space-y-3 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-white transition">
              Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-white transition">
              Qui sommes-nous
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/domains" class="hover:text-white transition">
              Domaines d’intervention
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/news" class="hover:text-white transition">
              Actualités
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-white transition">
              Partenariats & Coopération
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">
          Contact
        </h3>
        <p class="text-sm">
          📍 Siège Central : Dakar, Sénégal
        </p>
        <p class="text-sm mt-2">
          📧 contact@oepap2.org
        </p>
        <p class="text-sm mt-2">
          ☎️ +242 06 826 39 67
        </p>
      </div>

    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-700 py-6 text-center text-xs text-gray-400">
      © {{ new Date().getFullYear() }} OEPAPD2 —
      Sécurité • Humanitaire • Paix • Développement Durable —
      Tous droits réservés.
    </div>

  </footer>
</template>
