<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Messages</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-row class="ion-align-items-start" style="height: 100vh">
      <ion-col>
        <ion-list>
          <ion-item v-for="message in messages" :key="message">
            <ion-avatar slot="start">
              <img :src="/assets/+message.user.image" alt>
            </ion-avatar>
            <ion-label>
              <h2>{{ message.user.name }}, {{ message.user.age}} lat</h2>
              <p>{{ message.message }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
    <Tabs />
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonRow,
  IonCol,
  IonLabel,
  IonAvatar
} from '@ionic/vue';
import Tabs from "@/views/Tabs.vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

interface Message {
  name: string;
  age: number;
  image: string;
  messages: string[];
}

export default defineComponent({
  components: { IonHeader, IonPage, IonTitle, IonToolbar, Tabs, IonItem, IonList, IonRow, IonCol, IonAvatar, IonLabel },
  setup() {
    const router = useRouter()
    const store = useStore()
    const messages = ref()

    onMounted(() => {
      // const user = _.find(store.state.users)
      messages.value = store.state.messages
      store.commit('clearCount')
    })

    return { messages }
  }
});
</script>
