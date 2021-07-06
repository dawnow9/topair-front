<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="schedule" href="/messages" @click="afterTabChange">
          <ion-icon :icon="chatbubblesOutline"></ion-icon>
          <ion-label>Messages</ion-label>
          <ion-badge v-show="showBadge()">{{ messagesCount }}</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="speakers" href="/topair">
          <ion-icon :icon="balloonOutline"></ion-icon>
          <ion-label>#TOPAIR</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/profile">
          <ion-icon :icon="personCircleOutline"></ion-icon>
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watchEffect} from 'vue';
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge
} from '@ionic/vue';
import { chatbubblesOutline, personCircleOutline, balloonOutline } from 'ionicons/icons';
import {useStore} from "vuex";

export default defineComponent({
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs, IonBadge },
  setup() {
    const store = useStore()

    const messagesCount = ref()

    function showBadge()
    {
      return messagesCount.value > 0
    }

    watchEffect(() => {
      messagesCount.value = store.state.count
    })

    const afterTabChange = () => {
      store.commit('clearCount')
    }

    return {
      balloonOutline,
      personCircleOutline,
      chatbubblesOutline,
      messagesCount,
      afterTabChange,
      showBadge
    }
  }
});
</script>
