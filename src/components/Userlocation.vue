<template>
  <div>
    <h2>用户地址</h2>
    <h3>发出时间:{{ data | dateFormat }}</h3>
  </div>
</template>

<script>
export default {
  name: "Userlocation",
  data() {
    return {
      data: new Date(),
    };
  },
};
</script>

<style lang="scss"  scoped>

h2 {
  color: rgb(247, 4, 154);
  border: 1px solid rgb(131, 12, 18);
  width: 300px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #89ee05;
}
h3 {
  color: rgb(8, 240, 131);
  border: 1px solid rgb(199, 243, 4);
  width: 300px;
  text-align: center;
  box-shadow: inset 0 0 20px 0 #05eee2;
}
</style>
