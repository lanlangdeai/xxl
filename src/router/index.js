import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Forget from '@/components/Forget'
import Register from '@/components/Register'
import Start from '@/components/Start'
import My from '@/components/My'
import Homepage from '@/components/Homepage'
import Add from '@/components/Add'
import ChangePwd from '@/components/ChangePwd'
import Collect from '@/components/Collect'
import Message from '@/components/Message'
import Story from '@/components/Story'
import ChangeInfo from '@/components/ChangeInfo'
import changeName from '@/components/information/changeName'
import Signature from '@/components/information/Signature'
import ChangePhone from '@/components/information/ChangePhone'
import ChangeMail from '@/components/information/ChangeMail'
import CollectDetails from '@/components/CollectDetails'
import StoryDetails from '@/components/StoryDetails'
import Visitor from '@/components/category/Visitor'
import Fans from '@/components/category/Fans'
import Focus from '@/components/category/Focus'

Vue.use(Router)

export default new Router({
  routes: [
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
    { path: '/changeName', component: changeName },
    { path: '/Signature', component: Signature },
    { path: '/ChangePhone', component: ChangePhone },
    { path: '/ChangeMail', component: ChangeMail },
    { path: '/CollectDetails', component: CollectDetails },
    { path: '/StoryDetails', component: StoryDetails },
    { path: '/Visitor', component: Visitor },
    { path: '/Fans', component: Fans },
    { path: '/Focus', component: Focus },
  ]
})
