<template>
    <div>
        <div style="border-bottom: solid 1px #e6e6e6;height: 100px">
            <img src="../../assets/img/adminTitle.png"  style="width: 100%;height: 100px;">
        </div>
        <el-col  style="width: 17%;min-width:150px;height: 500px;border-right:0.1px solid #f1e7e7;border-top:0.1px solid #f1e7e7;position: fixed">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    v-for="(navigation,index) in menuList"  :key="index"
            >
                <el-menu-item index=index+1  @click="change(index,navigation.paths)" :id=index>
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{navigation.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <div style="height: 500px;width:80.5%;margin: 10px 0px 20px 17%">
            <happy-scroll style="height: 100%" size="0">
                <router-view></router-view>
            </happy-scroll>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                clickFont:"",
                menuList:[
                    {title:"推荐软件",paths:"adminDownload"},
                    {title:"学习资料",paths:"adminLearn"},
                    {title:"提问",paths:"adminDownload"},
                    {title:"推荐软件",paths:"adminDownload"},
                    {title:"推荐软件",paths:"adminDownload"},
                ]
            };
        },

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

    };
</script>
<style scoped >
    .el-scrollbar__wrap {
        overflow-x: hidden;
    }

</style>
