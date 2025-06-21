<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

const navBarItems = [
  { text: 'Home', url: '/', ariaLabel: 'Home' },
  { text: 'Permainan', url: '/about', ariaLabel: 'About' },
  { text: 'Literatur', url: '/contact', ariaLabel: 'Contact' },
  { text: 'Tentang Kami', url: '/contact', ariaLabel: 'Contact' }
]

</script>

<template>
  <HeaderBar :nav-bar-items="navBarItems" />
  <div class="pt-8">
    <router-view />
  </div>
  <FooterBar/>
</template>
