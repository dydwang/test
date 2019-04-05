<template>
    <div style="width: 100%;height: 100%;">
    <div style="width: 100%;height: 80px;border: 1px solid black;
                opacity:0.9;margin: 0 0;">
        <div style="margin: 5px 0;width: 100%;height: 100%">
            <img src="@/assets/GIT.png"
                style="width: 70px;height: 70px;
                    margin-left: 50px;">
            <div style="width: 392px;height: 70px; margin-left: 10px">
                <span style="font-size:28px;color: #000;">贵州理工学院二次排课管理系统</span>
                <span style="font-size:22px;font-style:oblique;color: #667686;
                     margin-left: 40px;margin-top: 5px          ">
                    Guizhou Institute of Technology</span>
            </div>

            <img src="@/assets/GIThead.png" style="width: 70px;height: 70px;border-radius:40px;
            border: 1px black solid;margin-left: 90%;margin-top:-70px;float: left; "   >
        </div>
    </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "schoolTitle"
    }
</script>

<style scoped>
    *{float: left;}
</style>'