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

<style  scoped>
h2 {
  color: rgb(247, 4, 4);
  border: 1px solid rgb(142, 5, 233);
  width: 300px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #89ee05;
}


h3{
   color: rgb(28, 14, 230);
  border: 1px solid rgb(142, 5, 233);
  width: 300px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #1ac223;
}

</style>
