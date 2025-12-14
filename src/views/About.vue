<script setup>
</script>

<template>
  <Header />
  <!-- HERO -->
  <section
    class="pt-36 pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
  >
    <div class="max-w-5xl mx-auto px-6 text-center animate-fade-in">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Qui sommes-nous ?
      </h1>
      <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Une organisation panafricaine engagée pour la
        <span class="text-blue-400 font-semibold">
          Sécurité, l’Humanitaire, la Paix et le Développement Durable
        </span>
        en Afrique.
      </p>
    </div>
  </section>

  <!-- INTRO -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6 space-y-8 animate-slide-up">
      <p class="text-gray-700 text-lg leading-relaxed">
        <strong>L’OEPAPD2</strong> est une Organisation Non Gouvernementale de
        Coopération Internationale pour le Développement (ONGID) panafricaine,
        dirigée par une équipe internationale de hauts dirigeants et d’experts
        africains. Son Siège Central est basé à
        <strong>Dakar, Sénégal</strong>.
      </p>
      <p class="text-gray-700 leading-relaxed">
        L’organisation repose sur un modèle innovant fondé sur le
        <strong>Nexus SHPD2</strong> :
        <em>Sécurité, Humanitaire, Paix et Développement Durable</em>,
        combiné à une approche plurinationale, multisectorielle et polyglotte.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Créée par des experts africains et des partenaires de l’Afrique dans le
        monde, l’OEPAPD2 accompagne les États africains dans la prévention des
        conflits, la gestion des crises, la consolidation de la paix et la
        construction d’un développement durable et inclusif.
      </p>
    </div>
  </section>
  <!-- PROBLÉMATIQUE -->
  <section class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">
        Les défis majeurs à relever
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h3 class="font-semibold text-xl mb-4 text-red-600">
            Fracture sécuritaire
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Extrémisme violent, terrorisme, conflits armés, déplacements massifs
            de populations et insécurité alimentaire chronique.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h3 class="font-semibold text-xl mb-4 text-yellow-600">
            Fracture socio-économique
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Pauvreté structurelle, chômage massif, radicalisation,
            migrations irrégulières et criminalité juvénile.
          </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h3 class="font-semibold text-xl mb-4 text-blue-600">
            Vulnérabilités systémiques
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Pandémies, chocs climatiques, dégradation environnementale
            et raréfaction des ressources.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- APPROCHE -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">
        Notre approche stratégique
      </h2>

      <ul class="grid md:grid-cols-2 gap-6 text-gray-700">
        <li class="p-6 border-l-4 border-blue-600 bg-gray-50 rounded">
          Renforcement des capacités des Forces Publiques de Sécurité et Défense
        </li>
        <li class="p-6 border-l-4 border-green-600 bg-gray-50 rounded">
          Promotion de la jeunesse, paix et sécurité
        </li>
        <li class="p-6 border-l-4 border-purple-600 bg-gray-50 rounded">
          Femmes, paix et sécurité – Résolution 1325
        </li>
        <li class="p-6 border-l-4 border-orange-600 bg-gray-50 rounded">
          Entrepreneuriat, emplois durables et inclusion sociale
        </li>
      </ul>
    </div>
  </section>



  <!-- DOMAINES -->
<section class="py-24 bg-white">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
      Domaines d’intervention
    </h2>

    <div class="grid md:grid-cols-4 gap-6">
      <!-- Sécurité -->
      <RouterLink
        to="/domains/security"
        class="block p-6 rounded-xl border hover:shadow-lg transition bg-white transform hover:-translate-y-1 hover:scale-105"
      >
        <h3 class="font-semibold mb-3">Sécurité</h3>
        <p class="text-sm text-gray-600">
          Prévention des conflits, protection des civils,
          lutte contre l’extrémisme violent.
        </p>
      </RouterLink>

      <!-- Humanitaire -->
      <RouterLink
        to="/domains/hamanitarian"
        class="block p-6 rounded-xl border hover:shadow-lg transition bg-white transform hover:-translate-y-1 hover:scale-105"
      >
        <h3 class="font-semibold mb-3">Humanitaire</h3>
        <p class="text-sm text-gray-600">
          Réponse aux crises, aide d’urgence,
          résilience communautaire.
        </p>
      </RouterLink>

      <!-- Paix -->
      <RouterLink
        to="/domains/peace"
        class="block p-6 rounded-xl border hover:shadow-lg transition bg-white transform hover:-translate-y-1 hover:scale-105"
      >
        <h3 class="font-semibold mb-3">Paix</h3>
        <p class="text-sm text-gray-600">
          Médiation, réconciliation,
          transformation des conflits.
        </p>
      </RouterLink>

      <!-- Développement durable -->
      <RouterLink
        to="/domains/subtainabledev"
        class="block p-6 rounded-xl border hover:shadow-lg transition bg-white transform hover:-translate-y-1 hover:scale-105"
      >
        <h3 class="font-semibold mb-3">Développement durable</h3>
        <p class="text-sm text-gray-600">
          ODD, climat, inclusion sociale,
          croissance verte.
        </p>
      </RouterLink>
    </div>
  </div>
</section>


</template>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out both;
}

.animate-slide-up {
  animation: slide-up 1s ease-out both;
}
</style>
