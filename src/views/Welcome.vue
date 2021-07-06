<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Welcome!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-row class="ion-align-items-start" style="height: 100vh">
      <ion-col style="text-align: center">
        <h1>Wybierz swoją okolice: </h1>
        <ion-button @click="router.push('/topair')">Lokalizacja</ion-button>
        <h3>Lub wpisz swoje miasto</h3>
        <ion-item>
          <ion-label position="fixed">Miasto: </ion-label>
          <ion-input></ion-input>
          <ion-button  @click="router.push('/topair')">Wybierz</ion-button>
        </ion-item>
      </ion-col>
    </ion-row>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from '@ionic/vue';
import {useRouter} from "vue-router";

interface Message {
  name: string;
  age: number;
  image: string;
  messages: string[];
}

export default defineComponent({
  components: { IonHeader, IonPage, IonTitle, IonToolbar,  IonRow, IonCol},
  setup() {
    const router = useRouter()

    return { router }
  }
});
</script>
