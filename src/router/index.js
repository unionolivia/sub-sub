import { createRouter, createWebHistory } from 'vue-router'
import Subscriber from '../views/Subscriber.vue'
import RegisterSub from '../components/RegisterSub.vue'
import EditSub from '../components/EditSub.vue'
import Field from '../views/Field.vue'
import RegisterField from '../components/RegisterField.vue'
import EditField from '../components/EditField.vue'

const routes = [
  {
    path: '/',
    name: 'Subscriber',
    component: Subscriber
  },
  {
    path: '/addsub',
    name: 'RegisterSub',
    component: RegisterSub,
  },
  {
    path: '/editsub/:id/edit',
    name: 'EditSub',
    component: EditSub,
    props: true
  },
  {
    path: '/field',
    name: 'Field',
    component: Field

  },
  {
    path: '/addfield',
    name: 'RegisterField',
    component: RegisterField,
  },
  {
    path: '/editfield/:id/edit',
    name: 'EditField',
    component: EditField,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
