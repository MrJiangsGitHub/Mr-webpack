import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter); // 必须安装到Vue框架中
import login from '@/components/Login.vue'
import register from '@/components/Register.vue'
import sports from '@/components/Sports.vue'
import add from '@/components/Add.vue'
import arr from '@/components/Arr.vue'
let router = new VueRouter({
    // 定义你的路由匹配
    routes: [
        { path: '/login', component: login },
        { path: '/register', component: register },
        {
            path: '/sports', component: sports,
            children: [
                { path: 'add', component: add },
                { path: 'arr', component: arr },
            ]
        }
    ]
})

export default router