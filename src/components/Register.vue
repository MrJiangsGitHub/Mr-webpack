<template>
    <div>
<h1>注册组件--{{message}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message:'嗦嘎'
            }
        }
    }
</script>

<style  scoped>
h1{
    color: rgb(235, 11, 149);
    border: 1px solid rgb(8, 235, 148);
    width: 250px;
    text-align: center;
    box-shadow:inset 0 0 20px 0 #05deee;
}
</style>