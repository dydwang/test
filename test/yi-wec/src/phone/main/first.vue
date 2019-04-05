<template>
    <div >
        <div id="target"></div>
        <HappyScroll :min-length-h="20">
            <div style="width: 15%;height: 200px;position: fixed;z-index: 100;">


            </div>
            <zouMa></zouMa>
            <pcondition></pcondition>
            <active></active>
        </HappyScroll>
    </div>
</template>

<script>
    import pcondition from "@/phone/component/pcondition"
    import { HappyScroll } from 'vue-happy-scroll'
    // 引入css，推荐将css放入main入口中引入一次即可。
    import 'vue-happy-scroll/docs/happy-scroll.css'
    import active from  "@/phone/main/active"
    import zouMa from  "@/phone/main/zouMa"

    export default {
        name: "first",
        data(){
            return{
                scrollTop: 0,
                time: 0,
                dParams: 20,
                scrollState: 0
            }
        },
        components:{
            zouMa,
            active,
            HappyScroll,
            pcondition
        },
        methods:{

    }}
</script>

<style scoped>

</style>