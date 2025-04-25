<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <section >
    <router-view/>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale , fallbackLocale} = useI18n()

let langStorage =localStorage.getItem('lang') || fallbackLocale.value.toString()
    if(langStorage){
        locale.value = langStorage
    }
const isRtl = computed(() => ['ar', 'he', 'fa', 'ur'].includes(locale.value))
document.documentElement.setAttribute('dir', isRtl.value ? 'rtl' : 'ltr');
</script>

<style lang="scss">
:root {
  scroll-behavior: auto !important;
}

</style>
