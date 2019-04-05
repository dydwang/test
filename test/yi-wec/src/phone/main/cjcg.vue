<template>
    <div id="apps">
        <nav>
            <p v-for="(item,$index) in arr" @click="toggle($index)" :class="{active:$index==active}">{{item}}</p>
        </nav>
测试导航横向滑动    </div>


</template>

<script>
    export default {
        name: "cjcg",
        data(){
            return{
                active: 0,
                arr: [
                    "新闻",
                    "视频",
                    "社会",
                    "军事",
                    "军事1",
                    "军事2",
                    "军事3",
                    "军事4",
                ]
            }
        },
        computed:{

        },
        methods:{
            toggle(index){
                this.active=index
            }
        },
    }
</script>

<style scoped>


    #apps{
        width: 100%;
        overflow:hidden;

    }
    #apps nav{
        padding: 0 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: middle;
        -ms-flex-align: middle;
        align-items: middle;
        overflow: auto;
    }
    #apps p{
        text-align: center;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;

    }
    #apps p.active{
        color: #ffff00;
        background-color: #000000;
    }
</style>