<template>

    <div id="app">
        <div class="footer-box">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
                <van-tabbar-item icon="aim" dot>圈子</van-tabbar-item>
                <van-tabbar-item icon="chat" info="15">信息</van-tabbar-item>
                <van-tabbar-item icon="contact" to="/tuijian">

                        我的
                </van-tabbar-item>
            </van-tabbar>

        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "footerBox",
        data() {
            return {
                active: 0
            }
        }
    };
</script>

<style scoped >
    .footer-box {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        border-top: 1px solid #ddd;
        z-index: 100;
        background: #efeeee;
    }

    .footer-icon {
        float: left;
        /*margin: 10px 50px 0 10px;*/
        width: 25%;
        height: 100%;
        text-align: center;
        line-height: 63px;
    }

    .footer-user {
        float: right;
        /*margin: 10px 50px 0 10px;*/
        width: 25%;
        height: 100%;
        text-align: center;
        line-height: 63px;
    }
</style>
