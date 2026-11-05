import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/components/Login.vue'
import Forget from '@/components/Forget.vue'
import Register from '@/components/Register.vue'
import Start from '@/components/Start.vue'
import My from '@/components/My.vue'
import Homepage from '@/components/Homepage.vue'
import Add from '@/components/Add.vue'
import ChangePwd from '@/components/ChangePwd.vue'
import Collect from '@/components/Collect.vue'
import Message from '@/components/Message.vue'
import Story from '@/components/Story.vue'
import ChangeInfo from '@/components/ChangeInfo.vue'
import ChangeName from '@/components/information/ChangeName.vue'
import Signature from '@/components/information/Signature.vue'
import ChangePhone from '@/components/information/ChangePhone.vue'
import ChangeMail from '@/components/information/ChangeMail.vue'
import CollectDetails from '@/components/CollectDetails.vue'
import StoryDetails from '@/components/StoryDetails.vue'
import Visitor from '@/components/category/Visitor.vue'
import Fans from '@/components/category/Fans.vue'
import Focus from '@/components/category/Focus.vue'

const routes = [
  { path: '/', component: Start },
  { path: '/Login', component: Login },
  { path: '/Forget', component: Forget },
  { path: '/Start', component: Start },
  { path: '/My', component: My },
  { path: '/Homepage', component: Homepage },
  { path: '/Add', component: Add },
  { path: '/Register', component: Register },
  { path: '/Collect', component: Collect },
  { path: '/Message', component: Message },
  { path: '/ChangePwd', component: ChangePwd },
  { path: '/Story', component: Story },
  { path: '/ChangeInfo', component: ChangeInfo },
  { path: '/ChangeName', component: ChangeName },
  { path: '/Signature', component: Signature },
  { path: '/ChangePhone', component: ChangePhone },
  { path: '/ChangeMail', component: ChangeMail },
  { path: '/CollectDetails', component: CollectDetails },
  { path: '/StoryDetails', component: StoryDetails },
  { path: '/Visitor', component: Visitor },
  { path: '/Fans', component: Fans },
  { path: '/Focus', component: Focus },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
