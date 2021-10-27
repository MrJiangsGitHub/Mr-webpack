import Vue from 'vue'
import VueRouter from 'vue-router'
import "../../node_modules/nprogress/nprogress.css"
import NProgress from "nprogress"
Vue.use(VueRouter); // 必须安装到Vue框架中
let router = new VueRouter({
    // 定义你的路由匹配
    routes: [
        // 懒加载
        { path: '', component: () => import(/* webpackChunkName: "mylogin" */'@/components/Login.vue') },
        {
            path: '/login',

            component: () => import(/* webpackChunkName: "mylogin" */'@/components/Login.vue')
        },
        { path: '/register', component: () => import(/* webpackChunkName: "myRegister" */'@/components/Register.vue') },
        {
            path: '/sports', component: () => import(/* webpackChunkName: "mySports" */'@/components/Sports.vue'),
            children: [
                { path: 'userinfo', component: () => import(/* webpackChunkName: "myUserinfo" */'@/components/Userinfo.vue') },
                { path: 'userlocation', component: () => import(/* webpackChunkName: "myuserlocation" */'@/components/Userlocation.vue') },
            ]
        }
    ]

})
//全局前置守卫
router.beforeEach((to, from, next) => {
    //进度条开启
    NProgress.start();
    next()
})
//全局后置守卫
router.afterEach((to, from) => {
    //进度条关闭
    NProgress.done();
})
export default router