<template>
    <section>
        <div class="d-flex h-100 align-items-center">
            <div class="container">
                <header class="text-center mb-5">
                    <h2 class="text-uppercase lined">{{titles}}</h2>
                </header>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "learning",
        methods:{
            open(path){
                const {$router} = this
                $router.push(path)
            }
        },
        props:['titles']
    }
</script>

<style scoped>
    .align-items-center{-ms-flex-align:center!important;align-items:center!important}
    .d-flex{display:-ms-flexbox!important;display:flex!important}
    .h-100{height:100%!important}

    .container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px)
    {.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px)
    {.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}

    .text-center{text-align:center!important}
    .mb-5,.my-5{margin-bottom:3rem!important}
    .text-uppercase{text-transform:uppercase!important;letter-spacing: 0.08em;}
    .lined::after {
        content: '';
        display: block;
        width: 6.25rem;
        height: 1px;
        margin: 1.25rem auto;
        background: #4fbfa8;
    }
    .img-fluid{max-width:100%;height:auto}
    .d-block{display:block!important}
    .mx-auto{margin-left:auto!important}

    .bkfont{color: #fff;font-size: 50px;font-family: 600;margin: auto auto; text-align: center;line-height: 200px}

    .image1{background: url('../../assets/img/portfolio-1.jpg') no-repeat;background-size:cover;margin:0 3%;}
    .image2{background: url('../../assets/img/portfolio-5.jpg') no-repeat;background-size:cover;margin:0 3%;}
    .image3{background: url('../../assets/img/portfolio-4.jpg') no-repeat;background-size:cover;margin:0 3%;}
    .image4{background: url('../../assets/img/portfolio-6.jpg') no-repeat;background-size:cover;margin:0 3%;}

    .row>div{
        float: left;
        width:44% ;
        height: 240px;
        margin-bottom: 20px;
    }
    .row>div>img{
        margin-left: 5%;
        margin-bottom: 20px;
        width: 90%;
        height: 200px;
    }
</style>