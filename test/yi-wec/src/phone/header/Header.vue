<template>
    <div>

        <div class="headBox">

                    <span style="font-size: 20px;margin-left: 41%">丰 神 榜</span>
                 <router-link to="pActive" style="z-index: 2">
                     <van-icon name="plus" size="30px" color="#ffffff" style="top: 3px;left: 360%"></van-icon>
                 </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped >
    *{float: left}
    .headBox{
        width: 100%;
        height: 3rem;
        background-color: #3fbefa;
        font-size: 2rem;
        color: white;
        line-height: 3rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

</style>