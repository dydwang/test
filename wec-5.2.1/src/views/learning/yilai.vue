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
                titles:"依赖",
                posts:"yilai",

            }
        }
    }
</script>

<style scoped>

</style>