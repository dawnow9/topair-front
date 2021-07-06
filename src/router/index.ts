import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from "@/views/login/Login.vue";
import Messages from '../views/Messages.vue'
import Topair from "@/views/Topair.vue";
import Chat from "@/views/Chat.vue";
import Profile from "@/views/Profile.vue";
import {useStore} from "vuex";
import Welcome from "@/views/Welcome.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/topair',
    name: 'Topair',
    component: Topair
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  next()
})

export default router
