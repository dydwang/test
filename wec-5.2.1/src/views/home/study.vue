<template>
    <section class="bg-gray">
        <div class="d-flex h-100 align-items-center">
            <div class="container">
                <header class="mb-5 text-center">
                    <h2 class="text-uppercase lined">STUDY</h2>
                </header>
                <div class="row text-center">
                    <div class="col-lg-4 col-md-6 mb-4" @click="pathto('download')" >
                            <div class="icon mb-3"><van-icon name="apps-o" size="25px" /></div>
                            <h4 class="text-uppercase lined lined-compact">推荐软件</h4>
                            <p class="text-mted"> Pain past is pleasure. While there is life, there is hope. Wisdom in the mind is better than money in the hand.</p>
                       </div>
                    <div class="col-lg-4 col-md-6 mb-4" @click="pathto('learning')">
                        <div class="icon mb-3"><van-icon name="orders-o" size="25px" /></div>
                        <h4 class="text-uppercase lined lined-compact">学习资料</h4>
                        <p class="text-mted">Storms make trees take deeper roots.Nothing is impossible for a willing heart.The shortest answer is doing.</p>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="icon mb-3"><van-icon name="edit" size="25px" /></div>
                        <h4 class="text-uppercase lined lined-compact">提问</h4>
                        <p class="text-mted">All things are difficult before they are easy.Great hopes make great man. In doing we learn.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "study",
        methods:{
            pathto(topath){
                const {$router} =this
                $router.push(topath)
            }
        }
    }
</script>

<style scoped>
    .bg-gray {
        background: #eee !important;
    }
    .d-flex{display:-ms-flexbox!important;display:flex!important}
    .h-100{height:100%!important}
    .align-items-center{-ms-flex-align:center!important;align-items:center!important}

    .mb-5{margin-bottom:3rem!important}
    .text-center{text-align:center!important}
    .text-uppercase{text-transform:uppercase!important;letter-spacing: 0.08em;}

    .lined::after {
        content: '';
        display: block;
        width: 6.25rem;
        height: 1px;
        margin: 1.25rem auto;
        background: #4fbfa8;
    }
    .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-15px}
    .text-center{text-align:center!important;background-color: rgba(238,238,238,1)}

    .col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;}
    .col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:33.333%}
    .col-lg-4,.col-md-6{position:relative;width:100%;}
    .mb-4{margin-bottom:1.5rem!important;
        float: left;
        }

    .icon {
        width: 2.5rem;
        height: 2.5rem;
        border: solid 1px #6c757d;
        margin: 0 auto;
        border-radius: 50%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .mb-3{margin-bottom:1rem!important}
    .text-uppercase{text-transform:uppercase!important}
    .lined::after {
        content: '';
        display: block;
        width: 6.25rem;
        height: 1px;
        margin: 1.25rem auto;
        background: #4fbfa8;
    }
    .lined-compact::after {
    }
    .text-mted{
        width: 80%;
        margin-left: 10%;
        color: #835757;
        font-family:"Times New Roman",Georgia,Serif
    }
</style>