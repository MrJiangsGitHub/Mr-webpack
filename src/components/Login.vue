<template>
  <div>
    <h1>登录组件--斯国一--{{ message }}</h1>
    <button @click='test'>获取数据</button>
  </div>
</template>

<script>
import { getData } from "@/api/api.js";
export default {
  name: "Login",
  data() {
    return {
      message: "登录世界",
    };
  },
  methods:{
     async test(){
    let data = await getData()
    console.log(data);
      }
  },
  created(){
   this.test()
  }

};
</script>

<style lang = "scss">
/* h1 {
  color: rgb(247, 243, 4);
  border: 1px solid rgb(142, 5, 233);
  width: 450px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #89ee05;
} */
</style>
