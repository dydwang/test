<template>
    <div style="width: 100%;height: 100px;
                   margin-top: 10px;margin-left: 20px" class="daohang">
        <div>
            <li class="title">举办方</li>
            <li class="main">官方</li>
            <li class="main">私人</li>
        </div>
        <div >
            <li class="title">运动类型</li>
            <li class="main" v-for="(sport,index) in sports" :key="index" @click="sportRange(sport)">{{sport}}</li>
        </div>

        <div >
            <li class="title">时间</li>
            <li class="main" v-for="(time,index) in times" :key="index" @click="timeRange(time)">{{time}}</li>
        </div>
    </div>
</template>

<script>
    export default {
        name: "condition",
        data(){
            return{
                sports:["全部","旅游","篮球","足球","乒乓球","游泳","象棋","画画",
                    "爬山","网球","跳舞","健身","排球"],
                times:["全部","1天内","2天内","3天内","5天内","1周内","1月内"]
            }
        },
        methods:{
            sportRange(sport){

                this.setSport(sport)
            },
            setSport(sport){
                this.$emit('transferRandom',sport)
            },
            timeRange(time){
                let datetime
                if(time==="1天内") datetime=24
                else if(time==="2天内") datetime=24*2
                else if(time==="3天内") datetime=24*3
                else if(time==="5天内") datetime=24*5
                else if(time==="1周内") datetime=24*7
                else if(time==="1月内") datetime=24*31
                this.$emit('timeRandom',datetime)
            }

        }
    }
</script>

<style scoped>
*{
    float: left;}

    .daohang li{
        list-style-type:none;
        margin-right: 20px;
        font-size: 16px;
    }
    .daohang>div{
        margin-bottom: 10px;
    }
    .main{
        color: #696f75;

    }
    .main:hover{
        color:#ff0000
    }
    .title{
        font-weight: 600;
        color: #474a4c
    }
</style>