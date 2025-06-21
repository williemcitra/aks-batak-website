<template>
  <div class="w-full max-w-full h-full flex flex-column lg:flex-row align-items-center py-8 px-3 lg:px-0 layout-margin">
    <div class="flex-grow-1 max-w-30rem">
      <!-- <h6 class="my-0 bg-yellow-50 text-yellow-500"></h6> -->
      <div class="my-0 text-yellow-500 flex ">
        <span class="text-2xl" style="letter-spacing: 4px;">ᯂᯬᯒᯘ᯲!</span>
      </div>
      <h3 class="playfair-display font-medium my-0 text-primary-100" style="letter-spacing: 1px;">Telusuri Lebih Dekat Aksara dan Budaya Batak</h3>
      <p class="text-xl roboto font-light text-primary-300 line-height-3">
        Telusuri dan lestarikan warisan budaya Batak dengan mempelajari Aksara Batak melalui permainan interaktif dan kisah-kisah tradisional yang penuh makna.
      </p>
    </div>
    <div ref="batakScriptEl" class="flex-grow-1 flex flex-column align-items-center">
      <div class="flex align-items-center gap-3">
        <div class="h-full mt-4">
          <i class="text-primary-50 text-2xl pi pi-chevron-left cursor-pointer" @click="prevIndex"></i>
        </div>
        <div>
          <div class="mb-2 text-xl">Aksara Batak</div>
          <div

            class="batak-script-char text-primary-100 bg-primary-700 flex align-items-center justify-content-center p-4 lg:p-6 border-round w-8rem h-8rem lg:w-10rem lg:h-10rem lg:max-w-10rem lg:max-h-10rem"
            style="aspect-ratio: 1;"
          >
            <Transition name="slide-fade">
              <span :key="batakScripts.index" class="text-4xl lg:text-6xl">
                {{ batakScripts.items[batakScripts.index].char }}
              </span>
            </Transition>

          </div>
        </div>
        <div>
          <div class="mb-2 text-xl">Bunyi</div>
          <div
            class="batak-script-char text-primary-100 bg-primary-700 flex align-items-center justify-content-center p-4 lg:p-6 border-round w-8rem h-8rem lg:w-10rem lg:h-10rem lg:max-w-10rem lg:max-h-10rem"
            style="aspect-ratio: 1;"
          >
            <Transition name="slide-fade-reverse">
              <span :key="batakScripts.index" class="text-4xl lg:text-6xl">
                {{ batakScripts.items[batakScripts.index].sound }}
              </span>
            </Transition>

          </div>
        </div>
        <div class="mt-4 h-full">
          <i class="text-primary-50 text-2xl pi pi-chevron-right cursor-pointer" @click="nextIndex"></i>
        </div>
      </div>
      <div class="flex flex-wrap align-items-center justify-content-center h-6rem lg:h-4rem gap-2">
        <span
          v-for="(item, index) in batakScripts.items"
          class="batak-script cursor-pointer text-2xl lg:text-3xl"
          :class="index === batakScripts.index ? 'selected text-primary-50' : 'text-primary-300'"
          :key="index"
          @click="batakScripts.index = index"
        >
          {{ item.char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useElementHover } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const batakScriptEl = useTemplateRef('batakScriptEl')
const isHovered = useElementHover(batakScriptEl)

function nextIndex() {
  if (batakScripts.value.index < batakScripts.value.items.length - 1) {
    batakScripts.value.index++
  } else {
    batakScripts.value.index = 0
  }
}

// onMounted(() => {
//   setInterval(() => {
//     if (!isHovered.value) nextIndex()
//   }, 2000);
// })
const autoNextInterval = ref(setInterval(() => {
  nextIndex()
}, 1500))

watch(isHovered, (hovered) => {
  console.log('Hovered:', hovered)
  if (hovered) {
    clearInterval(autoNextInterval.value)
  } else {
    setTimeout(() => {
      autoNextInterval.value = setInterval(() => {
        nextIndex()
      }, 1500)
    }, 4000);
  }
})

function prevIndex() {
  if (batakScripts.value.index > 0) {
    batakScripts.value.index--
  } else {
    batakScripts.value.index = batakScripts.value.items.length - 1
  }
}

const batakScripts = ref({
  items: [
    { char: 'ᯂ', sound: 'ha' },
    { char: 'ᯉ', sound: 'na' },
    { char: 'ᯇ', sound: 'ca' },
    { char: 'ᯘ', sound: 'ra' },
    { char: 'ᯖ', sound: 'ka' },
    { char: 'ᯑ', sound: 'da' },
    { char: 'ᯒ', sound: 'ta' },
    { char: 'ᯔ', sound: 'sa' },
    { char: 'ᯄ', sound: 'a' },
    { char: 'ᯅ', sound: 'ba' },
    { char: 'ᯞ', sound: 'ma' },
    { char: 'ᯐ', sound: 'ga' },
    { char: 'ᯆ', sound: 'pa' },
    { char: 'ᯛ', sound: 'wa' },
    { char: 'ᯢ', sound: 'ya' },
    { char: 'ᯜ', sound: 'nga' }
  ],
  index: 0,
})

</script>

<style scoped>

.batak-script {
  transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: font-size 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* font-size: 2rem; */
}

.batak-script.selected {
  transition: color 1.0s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: font-size 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* font-size: 4rem; */
}

.batak-script-char {
  font-size: 4rem;
  transition: font-size 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}


.slide-fade-enter-active,
.slide-fade-reverse-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);

}

.slide-fade-leave-active,
.slide-fade-reverse-leave-active {
  transition: none;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.slide-fade-reverse-enter-from,
.slide-fade-reverse-leave-to {
  transform: translateY(-30px);

  opacity: 0;
}

</style>
