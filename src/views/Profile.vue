<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded">
    <h2 class="text-2xl mb-4">Profile</h2>
    <p><strong>Nom:</strong> {{ auth.user?.name }}</p>
    <p><strong>Email:</strong> {{ auth.user?.email }}</p>
    <button class="mt-4 p-2 bg-red-600 text-white rounded" @click="logout">Se déconnecter</button>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const auth = useAuthStore();
    const router = useRouter();
    const logout = () => {
      auth.logout();
      router.push({ name: 'Home' });
    };
    return { auth, logout };
  },
};
</script>
