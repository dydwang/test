<template>
    <div class="block">
        <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in advertisement" :key="item">
                <span style="font-size: 28px">{{ item }}</span>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "zouMa",
        data(){
            return{
                advertisement:["官方举办的活动或广告1","官方举办的活动或广告2","官方举办的活动或广告3","官方举办的活动或广告4"],
            }
        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>