import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CkView from "@/views/CkView.vue";
import TiptapView from "@/views/TiptapView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'home', component: HomeView
        },
        {
            path: '/ck', name: 'ckview', component: CkView
        },
        {
            path: '/tiptap', name: 'tiptap', component: TiptapView
        }
    ]
})

export default router
