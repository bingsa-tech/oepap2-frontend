<script setup>
import Hero from "../components/home/Hero.vue";
import News from "../components/home/News.vue";
</script>

<template>
  <Header />

  <!-- HERO -->
  <section class="pt-32 pb-20 bg-gray-900 text-white">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
        Qui sommes-nous ?
      </h1>
      <p class="text-lg text-gray-300 leading-relaxed">
        Une organisation panafricaine engagée pour la
        <strong>Sécurité, l’Humanitaire, la Paix et le Développement Durable</strong>
        sur le continent africain.
      </p>
    </div>
  </section>

  <!-- INTRO -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 space-y-8">
      <p class="text-gray-700 leading-relaxed">
        <strong>L’OEPAPD2</strong> est une Organisation Non Gouvernementale de
        Coopération Internationale pour le Développement (ONGID) panafricaine,
        dirigée par une équipe internationale diversifiée de hauts dirigeants et
        d’experts africains. Son Siège Central (Bureau de Coordination Central)
        est basé à <strong>Dakar, Sénégal</strong>.
      </p>

      <p class="text-gray-700 leading-relaxed">
        Elle repose sur un modèle innovant fondé sur le
        <strong>Nexus SHPD2</strong> :
        <em>Sécurité, Humanitaire, Paix et Développement Durable</em>, combiné à
        un caractère plurinationale, multisectoriel et polyglotte.
      </p>

      <p class="text-gray-700 leading-relaxed">
        L’OEPAPD2 a été créée par un groupe d’experts africains et de partenaires
        de l’Afrique à travers le monde afin de soutenir et d’accompagner les
        États africains dans la prévention des conflits, la gestion des crises,
        la consolidation de la paix et la construction d’un développement
        continental durable.
      </p>
    </div>
  </section>

  <!-- PROBLÉMATIQUE -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-8">
        Quels défis voulons-nous résoudre ?
      </h2>

      <p class="text-gray-700 mb-6">
        La consolidation de la paix constitue aujourd’hui un enjeu majeur de la
        gouvernance mondiale et une condition indispensable au développement
        durable. Pourtant, le continent africain est confronté à une recrudescence
        de facteurs d’instabilité qui menacent les acquis sociaux et économiques.
      </p>

      <div class="grid md:grid-cols-3 gap-8 mt-10">
        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold text-lg mb-3">Fracture sécuritaire</h3>
          <p class="text-sm text-gray-600">
            Extrémisme violent, terrorisme, conflits armés, déplacements massifs
            de populations et insécurité alimentaire chronique.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold text-lg mb-3">Fracture socio-économique</h3>
          <p class="text-sm text-gray-600">
            Pauvreté structurelle, chômage massif, délinquance juvénile,
            radicalisation et migrations irrégulières.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow">
          <h3 class="font-semibold text-lg mb-3">Vulnérabilités systémiques</h3>
          <p class="text-sm text-gray-600">
            Pandémies, dégradation environnementale, raréfaction des ressources
            et chocs climatiques aggravant les crises existantes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- SOLUTION -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6 space-y-10">
      <h2 class="text-3xl font-bold">
        Notre approche et nos solutions
      </h2>

      <p class="text-gray-700">
        L’OEPAPD2 promeut une approche intégrée reposant sur la formation,
        l’éducation, la recherche, l’innovation, la sensibilisation et le
        renforcement des capacités des acteurs étatiques et non étatiques.
      </p>

      <ul class="list-disc pl-6 text-gray-700 space-y-2">
        <li>Renforcement des capacités des Forces Publiques de Sécurité et de Défense (FPSD)</li>
        <li>Promotion des stratégies Jeunesse, Paix et Sécurité</li>
        <li>Promotion de l’agenda Femmes, Paix et Sécurité (Résolution 1325)</li>
        <li>Création d’emplois durables et entrepreneuriat inclusif</li>
        <li>Développement social, économique et environnemental</li>
        <li>Promotion de la culture de la paix et du vivre-ensemble</li>
      </ul>
    </div>
  </section>

  <!-- VISION & MISSION -->
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <div>
        <h2 class="text-3xl font-bold mb-4">Vision</h2>
        <p class="text-gray-700 leading-relaxed">
          Participer à la promotion de la paix, de la sécurité, de la stabilité
          et du développement durable continental, tout en renforçant
          l’intégration régionale africaine.
        </p>
      </div>

      <div>
        <h2 class="text-3xl font-bold mb-4">Mission</h2>
        <p class="text-gray-700 leading-relaxed">
          Soutenir les acteurs étatiques et non étatiques afin de renforcer leurs
          capacités opérationnelles, multidimensionnelles et intégrées pour
          répondre aux crises, promouvoir la paix, conduire des actions
          humanitaires et favoriser le développement durable.
        </p>
      </div>
    </div>
  </section>

  <!-- DOMAINES -->
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-10">
        Domaines d’expertise et d’intervention
      </h2>

      <div class="grid md:grid-cols-4 gap-6">
        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Sécurité</h3>
          <p class="text-sm text-gray-600">
            Prévention des conflits, lutte contre l’extrémisme violent,
            protection des civils et renforcement des capacités.
          </p>
        </div>

        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Humanitaire</h3>
          <p class="text-sm text-gray-600">
            Réponse aux crises, assistance aux populations vulnérables,
            gestion des risques et résilience communautaire.
          </p>
        </div>

        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Paix</h3>
          <p class="text-sm text-gray-600">
            Médiation, transformation des conflits, réconciliation et
            consolidation de la paix durable.
          </p>
        </div>

        <div class="p-6 border rounded-xl">
          <h3 class="font-semibold mb-2">Développement durable</h3>
          <p class="text-sm text-gray-600">
            ODD, climat, biodiversité, emplois durables, inclusion sociale
            et croissance verte.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

