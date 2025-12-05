import { fileURLToPath, URL } from 'node:url'; // Importation explicite des utilitaires URL de Node
import { defineConfig, type UserConfig } from 'vite'; // Ajout du type UserConfig pour la robustesse
import vue from '@vitejs/plugin-vue';

// On utilise UserConfig comme type de retour pour garantir la conformité
export default defineConfig((): UserConfig => ({
  plugins: [vue()],
  
  // Configuration du serveur de développement
  server: {
    port: 4000, // Définit le port de l'application (localhost:4000)
    // host: true, // Optionnel : Décommenter pour écouter sur toutes les interfaces (utile en Docker)
  },
  
  // Configuration de la résolution des modules et des alias
  resolve: {
    alias: {
      // Configure l'alias '@' pour pointer vers le répertoire 'src' du projet
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}));