<template>
    <div>
    <div class="menuBox">
       <div class="boxOne">
           <router-link to="#"><span>主页</span></router-link>
           <a href="#"></a>
           <router-link to="#"><span>推荐</span></router-link>
       </div>
        <zouMa></zouMa>
        <HappyScroll :min-length-h="20">
        <pcondition></pcondition>
            <active></active>
        </HappyScroll>
    </div>
    </div>
</template>

<script>
    import { HappyScroll } from 'vue-happy-scroll'
    // 引入css，推荐将css放入main入口中引入一次即可。
    import 'vue-happy-scroll/docs/happy-scroll.css'
    import active from  "@/phone/components/main/active"
    import zouMa from  "@/phone/components/main/zouMa"
    import pcondition from "@/phone/pcondition"
    export default {
        name: "Menu",
        components:{
            pcondition,
            zouMa,
            active,
            HappyScroll
        }
    }
</script>

<style scoped="scss">
    .menuBox{
        position: fixed;
        top: 7.1rem;
        left: 0;
        width: 100%;
        margin-top: 5px;
        text-align: center;
        border-bottom: 0.1px solid #E4E7ED;
        height: 350rem;
        z-index: 1;
    }
    .boxOne{
        display: block;
        font-size: 1.6rem;
        text-align: center;
        line-height: 3.5rem;
        font-family: 方正姚体;
    }
    .boxOne a{
        margin: 0 4rem 0 4rem;
    }

</style>