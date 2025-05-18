<!-- src/views/AppLayout.vue -->
<template>
  
  <!-- <nav class="position-absolute bg-transparent">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="layout">
    
    <NavBar></NavBar>
    <main class="main-content">
      <router-view />
    </main>
    
    <footer>
      <p style="font-size: 23px;">Developed By <a href="http://luaysd.oncloudlb.com" target="_blank" rel="noopener noreferrer" class="link">Luay Sariedeen</a> </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/Nav-bar.vue';

</script>

<style scoped>
.layout{
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 100vh;
  justify-content: space-between;
}
nav {
  padding: 1rem;
  background-color: #eee;
  z-index: 1;
}

footer{
  width: 100%;
  padding: 10px;
  background: rgb(167, 167, 167);
}
</style>
