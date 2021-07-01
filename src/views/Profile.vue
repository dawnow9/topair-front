<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">Profile</ion-content>
    <Tabs />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import Tabs from "@/views/Tabs.vue";

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, Tabs }
});
</script>
