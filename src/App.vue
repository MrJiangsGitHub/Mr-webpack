<template>
  <div>
    <h1>App根组件</h1>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-link to="/sports">体育</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* scoped：让样式只在当前组件内生效.(样式私有化)  */
h1 {
  color: rgb(104, 14, 207);
  border: 1px solid rgb(205, 240, 11);
  width: 200px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #4d6e18;
}
</style>
