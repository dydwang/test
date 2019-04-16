<template>
    <el-col :span="4" style="height: 500px;border-right:0.1px solid #f1e7e7;border-top:0.1px solid #f1e7e7;position: fixed">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                v-for="(navigation,index) in listNavigation"  :key="index"
        >
            <el-menu-item index=index  @click="change(index,navigation.interface)" :id=index>

                <i class="el-icon-setting"></i>
                <span slot="title">{{navigation.name}}</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        name: "rightNav",
        data(){
            return{
                clickFont:"",
            }
        },
        props:[
            'listNavigation'
        ],
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            change(index,interfaces){
                //取消上次点击字体颜色
                let fontcolor =document.getElementById(index)
                if(this.clickFont!=="") {

                    let beforeFontcolor =document.getElementById(this.clickFont)
                    beforeFontcolor.style.color="rgb(102, 118, 134)";
                }
                fontcolor.style.color="#409EFF";
                this.clickFont=index
                const {$router} =this
                $router.push(interfaces)
            }
        }
    }
</script>

<style scoped>

</style>