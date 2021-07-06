<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-item>
      <ion-avatar slot="end">
        <img :src="/assets/+'seba.jpg'">
      </ion-avatar>
      <ion-label>{{ store.state.activeUser.name}}, {{ store.state.activeUser.age }}</ion-label>
    </ion-item>

    <ion-item>
      <ion-button @click="fireUpload()">
        Upload new photo
      </ion-button>
      <input type="file" class="ion-hide" ref="input">
    </ion-item>

    <ion-content class="ion-padding"></ion-content>
    <Tabs />
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import Tabs from "@/views/Tabs.vue";
import {useStore} from "vuex";

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, Tabs },
  setup()
  {
    const store = useStore()
    const input = ref()

    function fireUpload() {
      input.value.click()
    }



    return { store, fireUpload, input }
  }
});
</script>
