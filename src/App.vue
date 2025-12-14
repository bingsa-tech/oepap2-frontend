<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
