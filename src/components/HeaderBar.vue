<template>
  <nav
    id="navbar"
    class="navbar fixed top-0 left-0 w-full layout-margin flex justify-content-between align-items-center h-5rem lg:h-6rem gap-1 lg:gap-4"
    :class="[
      !isScrolled ? 'scrolled' : '',
    ]"
  >
    <div>
      asd
    </div>
    <div class="flex flex-initial align-items-center gap-3">
      <div class="flex align-items-center">
        <div>
          <Button
            v-if="!showMobileMenu"
            class="flex lg:hidden"
            variant="text"
            icon="pi pi-bars"
            severity="contrast"
            @click="showMobileMenu = true"
          />
          <Button
            v-else
            class="flex lg:hidden"
            variant="text"
            icon="pi pi-times"
            severity="contrast"
            @click="showMobileMenu = false"
          />
        </div>
        <div
          class="flex-initial align-items-center flex h-4rem lg:h-6rem py-1 lg:py-2"
        >
          <div
            class="h-full"
          >
            <RouterLink
              to="/"
              class="no-underline"
            >
            </RouterLink>
          </div>
        </div>
      </div>
      <nav v-if="navBarItems?.length > 0" class="hidden lg:flex">
        <ul class="flex gap-4">
          <li
            v-for="navbarItem in navBarItems"
            :key="navbarItem.url"
          >
            <RouterLink
              class="navItem text-nowrap no-underline text-xl"
              :class="[
                !isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-primary-50 hover:text-primary-400',
              ]"
              :to="navbarItem.url"
            >
              {{ navbarItem.text }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
  <div
    v-if="showMobileMenu"
    ref="mobileMenuRef"
    class="navbar-mobile fixed left-0 h-full w-9 surface-50 lg:hidden pl-4 pr-4"
    style="top: 5rem;"
  >
    <ul
      v-if="showMobileMenu"
      class="flex flex-column gap-2 pt-2 w-full"
    >
      <RouterLink
        v-for="navbarItem in navBarItems"
        :key="navbarItem.url"
        class="text-base font-medium w-full text-900 no-underline"
        :to="navbarItem.url"
        @click="showMobileMenu = false"
      >
        <li
          class="w-full p-3 hover:bg-primary-400 border-round-md"
          :aria-label="navbarItem.ariaLabel"
          style="border-radius: 4px;"
        >
          {{ navbarItem.text }}
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, useTemplateRef, computed } from 'vue';
import { useScroll } from '@vueuse/core'

const { navBarItems } = defineProps(['navBarItems'])
const showMobileMenu = ref(false)
// const el = useTemplateRef<HTMLElement>('el')
const { arrivedState } =  useScroll(window)


const isScrolled = computed(() => {
  return arrivedState.top;
})

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  /* padding: 1rem; */
  background-color: var(--p-primary-900);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  z-index: 999;
}

.navbar-mobile {
  z-index: 1001;
}

ul {
  list-style: none;
  padding: 0;
}

.navbar.transparent {
  background-color: transparent;
  backdrop-filter: none;
}

.navbar.scrolled {
  background-color: var(--p-primary-50);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: var(--p-primary-50);
}

.navItem {
  /* color: var(--p-primary-900); */
  /* font-weight: 500;
  font-size: 1rem; */
  transition: color 0.3s ease;
}

</style>
