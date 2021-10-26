<template>
    <div>
<h1>登录组件--{{message}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message:'登录世界'
            }
        }
    }
</script>

<style scoped>
h1{
    color: rgb(247, 243, 4);
    border: 1px solid rgb(142, 5, 233);
    width: 300px;
    text-align: center;
    box-shadow:inset 0 0 20px 0 #89ee05;
}
</style>
