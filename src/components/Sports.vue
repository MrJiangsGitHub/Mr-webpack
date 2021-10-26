<template>
  <div>
    <h1>加油-{{ message }}</h1>
    <router-link to="/sports/add">用户组件</router-link>
    <router-link to="/sports/arr">用户信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "干巴得",
    };
  },
};
</script>

<style scoped>
h1 {
  color: rgb(14, 207, 40);
  border: 1px solid rgb(175, 12, 12);
  width: 200px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #95ee05;
}
</style>
