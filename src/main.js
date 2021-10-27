import Vue from 'vue';
//创建根组件
import App from './App.vue';
//导入过滤器
import "@/filter/filters"

import router from '@/router/router.js';
new Vue({
    router,
    render: c => c(App)
}).$mount('#app')