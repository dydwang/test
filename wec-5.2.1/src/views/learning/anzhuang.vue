<template>
    <div>
        <titles :titles="titles"></titles>
        <tables :posts="posts"></tables>
    </div>
</template>

<script>
    import titles from "./title"
    import tables from "./table"

    export default {
        components:{
            titles,tables
        },
        data(){
            return{
                titles:"安装",
                posts:"Zhujian",


            }
        }
    }
</script>

<style scoped>

</style>