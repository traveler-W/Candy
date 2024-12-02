import {createRouter,createWebHashHistory,createWebHistory} from "vue-router";
import App from "../tools/index.vue";
import Title from "../tools/Title.vue";
const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/title",
    component: Title,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  //history:createWebHistory(),
  routes,
});

export default router;