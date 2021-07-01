<template>
  <ion-page>
    <ion-grid>
      <ion-row class="ion-align-items-center" style="height: 50vh">
        <ion-col>
          <div>
            <ion-row>
              <ion-col style="text-align: center">
                <h1>#TOPAIR</h1>
                <p style="color: red">FOR DEVELOPMENT PURPOSE ONLY</p>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-input class="input-login" placeholder="Username" v-model="user.username"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-input class="input-login" placeholder="Password" type="password" autocomplete="password" v-model="user.password"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-button style="float: right" color="primary" @click="login">Enter</ion-button>
              </ion-col>
            </ion-row>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonRow, IonGrid, IonCol, IonInput, IonButton} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import axios from "axios";
import {useRouter} from "vue-router";

interface User {
  username: string;
  password: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
    IonInput
  },
  setup() {
    const user = ref<User>({
      username: '',
      password: ''
    });
    const router = useRouter();
    async function login()
    {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username: user.value.username,
        password: user.value.password
      })

      if (response.status == 201)
      {
        localStorage.setItem('authKey', response.data.access_token)
        await router.push('/home')
      }

    }

    return { login, user }
  }
});
</script>

<style scoped>
.input-login {
  background-color: lightgrey;
  color: black;
  border-radius: 15px;
}

</style>
