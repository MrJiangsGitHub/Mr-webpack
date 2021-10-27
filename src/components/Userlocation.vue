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

<style lang="scss" scoped></style>
