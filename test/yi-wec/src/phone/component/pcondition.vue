<template>
    <div style="width: 94%;height: 150px;
                   margin-top: 5px;margin-left: 10px" class="daohang">
        <div>
            <li class="title">举办方</li>
            <li class="main">官方</li>
            <li class="main">私人</li>
        </div><br>
        <div :style="{width:widths}" class="apps">
            <li class="title">类型</li>
            <nav >
             <li class="main" v-for="(sport,index) in sports" :key="index" @click="sportRange(sport)" >{{sport}}</li>
                </nav>
        </div>

        <div :style="{width:widths}" class="apps">
            <li class="title">时间</li>

                <nav>
            <li class="main" v-for="(time,index) in times" :key="index" @click="timeRange(time)">{{time}}</li>
                </nav>

        </div>
    </div>
</template>

<script> //import { HappyScroll } from 'vue-happy-scroll'
    export default {
        name: "condition",
        data(){
            return{
                sports:["全部","旅游","篮球","足球","乒乓球","游泳","象棋","画画",
                    "爬山","网球","跳舞","健身","排球"],
                times:["全部","1天内","2天内","3天内","5天内","1周内","1月内"],
                widths:parseInt(window.screen.availWidth)-10+"px"
            }
        },
        mounted(){
            console.error(this.widths)
        },
        methods:{
            sportRange(sport){
                this.setSport(sport)
            },
            setSport(sport){
                if (sport==="全部") sport=""
                this.$store.state.sport=sport
            },
            timeRange(time){
                let datetime
                if(time==="全部") datetime=""
                else if(time==="1天内") datetime=24
                else if(time==="2天内") datetime=24*2
                else if(time==="3天内") datetime=24*3
                else if(time==="5天内") datetime=24*5
                else if(time==="1周内") datetime=24*7
                else if(time==="1月内") datetime=24*31
                this.$emit('timeRandom',datetime)
                this.$store.state.time=datetime
            }

        },
        components:{
           // HappyScroll
        }
    }
</script>

<style scoped>
*{
    float: left;}

    .daohang li{
        list-style-type:none;
        width: 48px;
        margin-right: 10px;

        font-size: 16px;
        text-align: left;
    }
    .daohang>div{
        margin-bottom: 10px;
        float: left;
        height: 38px;
    }
    .main{
        color: #696f75;

    }
    .main:hover{
        color:#ff0000
    }
    .title {
        font-weight: 600;
        color: #474a4c;
    }

.apps{
    overflow:hidden;
   display: flex;
}
.apps nav{
    overflow-x:hidden;
    width: 80%;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow:auto;
}
.apps li{

    -ms-flex-negative: 0;
    flex-shrink: 0;


}
::-webkit-scrollbar {
    width: 0;

}

</style>

