<template>
  <div class="bg-primary-50">
    <div class="bg-primary-900 h-30rem w-full flex align-items-center layout-margin">
      <BannerSlider/>
    </div>

    <div class="layout-margin">
      <div v-for="i in 10" :key="i" class="my-3 p-3 surface-100 border-round shadow-2">
        {{ i }}
      </div>
    </div>
  </div>
</template>


<script setup>
import BannerSlider from '@/components/BannerSlider.vue';
onMounted(() => {
  console.log('Home page mounted');
});
import { onMounted } from 'vue';
</script>
