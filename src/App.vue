<script setup>
import Header from "./components/Header.vue";
import Homepage from "./pages/Homepage.vue";
import Footer from "./components/Footer.vue";

function goOnPageTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>

<template class="page">
  <Header />
  <router-view> </router-view>
  <Footer />
  <div @click="goOnPageTop" class="scroll-box">
    <img class="scroll-top-img" src="/show-more.png" alt="box-scroll-img" />
  </div>
</template>

<style></style>
