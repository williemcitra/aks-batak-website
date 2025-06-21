import './assets/main.css'
import router from '@/router/index.js'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button"
import Badge from "primevue/badge"
import { definePreset } from '@primeuix/styled';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';
const app = createApp(App);

const myPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#fdf3f3ff",
      100: "#fbe5e5ff",
      200: "#f8d0d0ff",
      300: "#f2afafff",
      400: "#e98080ff",
      500: "#dc5757ff",
      600: "#c73b3bff",
      700: "#a72e2eff",
      800: "#8b2929ff",
      900: "#742828ff",
      950: "#561717ff",
    }
  }
})

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: myPreset,
  }
});
app.component('Button', Button);
app.component('Badge', Badge);
app.mount('#app');
