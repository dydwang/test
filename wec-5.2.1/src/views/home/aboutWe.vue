<template>
    <section >
        <div class="d-flex ">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <header class="text-center">
                            <h2 class="text-uppercase lined">About We</h2>
                        </header>
                        <p class="lead pfont">这是我们团队的初始界面</p>
                        <p class="pfont">
                            我们致力于学习并研发界面，在基于vue的框架下开发前端界面。
                            如果你想加入我们，首先有前端基础（html+css+javascript)。
                            如果你想变得更强大，我们会寻找时间培训关于vue框架的知识。
                        </p>
                        <p class="pfont">加入我们需要恒心，在大学你的世界会变得不一样。Joining US requires perseverance, and your world will be different in college.</p>
                        <div class="joinUs">
                            <div>
                                <img  class="qqImg" src="@/assets/img/WeC.png">
                            </div>
                            <el-button style="width: 40%;" >join us</el-button>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <img src="@/assets/img/about.jpg" alt="..."
                             class="img-fluid rounded-circle d-block mx-auto"
                          :style="{marginTop:bcheight}">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "aboutWe",
        data(){
            return{
                bcheight:""
            }
        },
        mounted() {
            this.screenss();
        },
        methods: {

            screenss: function() {
                const screenWidth = document.body.clientWidth;
                if (parseInt(screenWidth) < 888) {
                    {
                        (this.bcheight = 0)
                    }
                } else {
                    (this.bcheight = "-450px")
                }

            }
        },
    }
</script>

<style scoped>
    .d-block{display:block!important;margin-bottom: 10px}
    .mb-1,.my-1{margin-bottom:.25rem!important}
    d-flex{display:-ms-flexbox!important;
        display:flex!important;
        height:100%!important;
        -ms-flex-align:center!important;
        align-items:center!important;
        margin-top: 100px;
    }
    .container{max-width:960px}
    .row{display:-ms-flexbox;
        display:flex;
        -ms-flex-wrap:wrap;
        flex-wrap:wrap;

        -ms-flex-align:center!important;
        align-items:center!important
    }
    .col-lg-6{position:relative;width:93%;padding-right:2%;padding-left:5%;padding-top: 5%}
    .col-lg-5{position:relative;width:90%;padding-right:5%;padding-left:5%;padding-top: 5%}

    .pfont{color:#857a7a}
    .mb-4{margin-bottom:1.5rem!important}
    .mb-lg-0{margin-bottom:0!important}
    .text-center{text-align:center!important}
    .text-uppercase{text-transform:uppercase!important; letter-spacing: 0.08em;}
    .lined::after {
        content: '';
        display: block;
        width: 6.25rem;
        height: 1px;
        margin: 1.25rem auto;
        background: #4fbfa8;
    }
    .lead{font-size:1.25rem;font-weight:300}
    .img-fluid{max-width:100%;height:auto;border-radius:50%!important;display:block!important;
        margin-left:auto!important;
        margin-top: -450px;
        }
    *, ::after, ::before{
        box-sizing: border-box;
    }
    .qqImg{
        width: 40%;
        height:40%;
    }
    .joinUs{
    }
</style>