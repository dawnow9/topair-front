import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createStore } from 'vuex'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { UserData } from "./views/Topair.vue";

const store = createStore({
  state () {
    return {
      count: 0,
      activeUser: {
        name: 'Dawid',
        age: 21,
        description: 'Lubie pociągi',
        photo: 'seba.jpg'
      },
      users: [
        {
          id: 1,
          name: 'Seba',
          age: 29,
          description: 'Jakże nędzne są myśli ludzi małych.',
          photo: 'seba.jpg'
        },
        {
          id: 2,
          name: 'Rafałek',
          age: 18,
          description: 'Lubie anime i mieszkam w piwnicy',
          photo: 'fafik.png'
        },
        {
          id: 3,
          name: 'Bartosz',
          age: 40,
          description: 'Jeżdże renówką i nie jem mienska',
          photo: 'bartosh.png'
        },
        {
          id: 4,
          name: 'Seba4',
          age: 41,
          description: 'Jakże nędzne są myśli ludzi małych.',
          photo: 'seba.jpg'
        }
      ],
      messages: []
    }
  },
  mutations: {
    addMessage(state: any, n: any) {
      const message = {
        user: n,
        message: "Witaj!"
      }
      state.messages.push(message)
    },
    addCount(state) {
      state.count++
    },
    clearCount(state) {
      state.count = 0
    }
  },
  getters: {
     count (state) {
      return state.count;
    },
    messages(state) {
       return state.messages
    },
  }
})

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

router.isReady().then(() => {
  app.mount('#app');
});
