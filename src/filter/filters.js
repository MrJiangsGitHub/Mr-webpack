
import Vue from "vue";
import * as instrument from "@/util/tool";

// 循环注册过滤器
for (let key in instrument) {
    Vue.filter(key, instrument[key])
}
