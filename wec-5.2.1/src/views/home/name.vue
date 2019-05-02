<template>    
      <!--    ****   第一个展示界面      *****-->
    <div class="box-main">
        <section  class="beforeImg">
            <div class="backgroundImg" :style="{height:bcheight}"></div>
            <div class="text-uppercase my-4 z-index-1 position" ><signIn></signIn></div>
            <div class="position-relative z-index-1">
                <div class="container text-center text-white">
                    <p class="font-italic lead">Oh, hello, nice to meet you!</p>
                    <h1 class="text-uppercase my-4">we are weC</h1>
                    <p class="font-italic lead">We are a good learning team, developing Vue in our spare time.</p>
                    <p class="font-italic lead">We have best results with nice pictures on the background or nice colours.</p>
                </div>
            </div>
            <div class="scroll-btn link-scroll"><i class="el-icon-download"></i></div>
        </section>

    </div>
</template>

<script>
    import signIn from "@/components/signIn"
    export default {
        name: "name",
        data(){
            return{
                bcheight:document.body.clientHeight+"px"
            }
        },
        components:{signIn},
        mounted(){
        }
    }
</script>

<style scoped>
.box-main{
}

    .beforeImg{
        background-position: center center !important;
        background-size: cover !important;
        background: url(../../assets/img/macbook-juice.jpg);
        min-height: 100vh;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .backgroundImg{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;

    }
.font-italic{font-style:italic!important}
.text-white{color:#fff}
.text-center{text-align:center!important}
.lead{font-size:18px;font-weight:300;color: #fff;}
.text-uppercase{text-transform:uppercase!important}
.position-relative{position:relative!important}
.my-4{margin-top:1.5rem!important;font-family: "Montserrat", sans-serif;font-size: 2.5rem;color: #fff;}
.z-index-1 {z-index: 10;}


.scroll-btn:hover, .scroll-btn:focus {
    color: #fff;
    text-decoration: none;
}
    .scroll-btn{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 2px solid #fff;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        font-size: 0.8rem;
        position: absolute;
        bottom: 3rem;
        left: calc(50% - 1.25rem);
        -webkit-animation: float 2s linear infinite;
        animation: float 2s linear infinite;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        z-index: 2;
    }

    .position{
        position: absolute;
        left:48%;
        top:0px;

    }
</style>