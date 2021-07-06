<template>
  <ion-fab vertical="center" horizontal="end" slot="fixed" v-if="visible">
    <ion-fab-button color="danger" @click="like()">
      <ion-icon :icon="heartCircleOutline"></ion-icon>
    </ion-fab-button>
  </ion-fab>
  <ion-fab vertical="center" horizontal="start" slot="fixed" v-if="visible">
    <ion-fab-button color="primary" @click="dismiss()">
      <ion-icon :icon="heartDislikeCircleOutline"></ion-icon>
    </ion-fab-button>
  </ion-fab>
  <ion-row class="ion-align-items-center" style="height: 90vh" v-if="visible">
    <ion-col>
      <ion-row>
        <ion-col>
          <ion-img :src="/assets/+pick.photo"></ion-img>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <h1>{{ pick.name }}, {{ pick.age }} lat</h1>
          <h5>{{ pick.description }}</h5>
        </ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
  <ion-row class="ion-align-items-center" style="height: 90vh" v-if="!visible">
    <ion-col>
      <ion-row>
        <ion-col style="text-align: center">
          <h1>😔</h1>
          <h1>Brak dalszych propozycji</h1>
          <h2>Wróć ponownie później</h2>
        </ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {
  heartCircleOutline,
    heartDislikeCircleOutline
} from 'ionicons/icons';
import {Pick} from "@/views/Topair.vue";
import {IonCol, IonIcon, IonRow, IonImg, IonFab, IonFabButton} from "@ionic/vue";

export default defineComponent({
  emits: [
    'update:modelValue',
  ],
  components: { IonIcon, IonRow, IonCol, IonImg, IonFab, IonFabButton },
  props: {
    pick: {
      type: Object as PropType<Pick>,
      default: () => { return {
        name: '',
        age: 0,
        description: '',
        photo: '',
      }
      }
    },
  },
  setup(props, { emit }) {
    function like()
    {
      emit('update:modelValue', { userId: props.pick.id, image: props.pick.photo, age: props.pick.age, name: props.pick.name, answer: true })
    }

    function dismiss()
    {
      emit('update:modelValue', { answer: false })
    }

    const visible = computed(() => {
      return props.pick.name !== ''
    })


    return { heartCircleOutline, heartDislikeCircleOutline, dismiss, like, visible }
  }
})
</script>
