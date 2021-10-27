<template>
  <div>
    <h2> 用户信息</h2>
   <h3>登录时间:{{data | dateFormat}}</h3>
  </div>
</template>

<script>
export default {
  name: "Userinfo",
  data(){
    return{
      data:new Date()
    }
  }
};
</script>

<style lang="scss" scoped></style>
