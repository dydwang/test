<template>
    <div style="100%">
        <!--<HeadBox></HeadBox>-->

        <HappyScroll :min-length-h="20">
        <div class="menuBox">


            <router-view />

        </div> </HappyScroll>
        <BoBox></BoBox>
    </div>
</template>

<script>
    import { HappyScroll } from 'vue-happy-scroll'

    import HeadBox from "@/phone/header/Header.vue";
    import BoBox from "@/phone/bottom/boBox.vue";

    export default {
        name: "home",
        components: {
            HeadBox,
            BoBox,HappyScroll,
        }
    };
</script>

<style scoped="scss">
    .menuBox{
        position: fixed;
        top: 0rem;
        left: 0;
        width: 99%;
        margin-top: 5px;
        text-align: center;
        border-bottom: 0.1px solid #E4E7ED;
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