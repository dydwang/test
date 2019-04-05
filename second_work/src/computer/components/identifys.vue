
//随机图片验证码


<template>

    <div style="margin-left: 90px">
        <div class="s-canvas" @click="protectLogin()" id="disabled">
            <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
        </div>

        <!--<div>-->
            <!--<el-input   style="height: 50px;width:215px;margin-left: 80px;-->
                            <!--margin-top: 5px "-->
                        <!--placeholder="验证码"-->
                        <!--v-model="verification">-->

            <!--</el-input>-->
        <!--</div>-->
    </div>
</template>
<script>
    let chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',
        'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function randomChars() {
        let res = "";
        for(let i = 0; i < 4 ; i ++) {
            let randomNum = Math.ceil(Math.random()*35);
            res += chars[randomNum];
        }
        return res;

    }
    export default{
        name: 'SIdentify',
        data(){return{isDisable:false}},
        props: {
                //需要展示的验证码
            identifyCode: {type: String, default: ""},
                //最小字体大小
            fontSizeMin: {type: Number, default: 40},
                //最大字体大小
            fontSizeMax: {type: Number, default: 50},
                //背景颜色最小值
            backgroundColorMin: {type: Number, default: 180},
                //背景颜色最大值
            backgroundColorMax: {type: Number, default: 240},
            //字体颜色最小值
            colorMin: {type: Number, default: 50},
            //字体颜色最大值
            colorMax: {type: Number, default: 160},
            //干扰线
            lineColorMin: {type: Number, default: 40},
            lineColorMax: {type: Number, default: 180},

            //干扰点
            dotColorMin: {type: Number, default: 0},
            dotColorMax: {type: Number, default: 255},
                        //画布宽度
            contentWidth: {type: Number, default: 215},
                        //画布高度
            contentHeight: {type: Number, default: 100}
        },
        methods: {
            // 生成一个随机数
            randomNum (min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            // 生成一个随机的颜色
            randomColor (min, max) {
                let r = this.randomNum(min, max)
                let g = this.randomNum(min, max)
                let b = this.randomNum(min, max)
                return 'rgb(' + r + ',' + g + ',' + b + ')'
            },
            protectLogin(){
                let disabled=document.getElementById("disabled")
                disabled.setAttribute('style', 'pointer-events: none !important');   ////保护！！！！
                setTimeout(() => {
                    disabled.setAttribute('style', 'pointer-events: aotu !important')
                }, 500)
                this.drawPic ()},
            drawPic () {
                this.identifyCode=randomChars()
                this.setRandomChars()
                let canvas = document.getElementById('s-canvas')
                let ctx = canvas.getContext('2d')
                ctx.textBaseline = 'bottom'
                // 绘制背景
                ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
                ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
                // 绘制文字
                for (let i = 0; i < this.identifyCode.length; i++) {
                    this.drawText(ctx, this.identifyCode[i], i)
                }
                this.drawLine(ctx)
                this.drawDot(ctx)
            },
            //把验证码传值给sigin页面
            setRandomChars(){
                this.$emit('transferRandom',this.identifyCode)
            },
            drawText (ctx, txt, i) {
                ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
                ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
                let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
                let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
                var deg = this.randomNum(-45, 45)
                // 修改坐标原点和旋转角度
                ctx.translate(x, y)
                ctx.rotate(deg * Math.PI / 180)
                ctx.fillText(txt, 0, 0)
                // 恢复坐标原点和旋转角度
                ctx.rotate(-deg * Math.PI / 180)
                ctx.translate(-x, -y)
            },
            drawLine (ctx) {
                // 绘制干扰线
                for (let i = 0; i < 8; i++) {
                    ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
                    ctx.beginPath()
                    ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
                    ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
                    ctx.stroke()
                }
            },
            drawDot (ctx) {
                // 绘制干扰点
                for (let i = 0; i < 100; i++) {
                    ctx.fillStyle = this.randomColor(0, 255)
                    ctx.beginPath()
                    ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
                    ctx.fill()
                }
            }
        },

        mounted () {
            this.drawPic()
        },
        data(){
            return{
                verification:""
            }
        }
    }
</script>
---------------------
<!--作者：yyjourney-->
<!--来源：CSDN-->
<!--原文：https://blog.csdn.net/yyjourney/article/details/79072093-->
<!--版权声明：本文为博主原创文章，转载请附上博文链接！-->