<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>#TOPAIR</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Card :pick="pick" @update:modelValue="(v) => parseResponse(v)"/>
    </ion-content>
    <Tabs />
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watch, watchEffect} from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import Tabs from "@/views/Tabs.vue";
import Card from "@/views/Card.vue";
import {useStore} from "vuex";

export interface Pick {
  id: number;
  name: string;
  age: number;
  description: string;
  photo: string;
}

export interface UserData {
  userId: number;
}

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, Tabs, Card },
  setup() {
    const pick = ref()
    const pickNumber = ref(0)
    const store = useStore()
    const response = ref({})

    function parseResponse(e: { id: number; answer: boolean })
    {
      if (e.answer) {
        store.commit('addMessage', e)
        store.commit('addCount')
        pickNumber.value++
      } else {
        pickNumber.value++
      }

      pick.value = store.state.users[pickNumber.value]
    }

    onMounted(() => {
      pick.value = store.state.users[pickNumber.value]
    })

    return { response, pick, parseResponse }
  },
});
</script>
