<template>
    <div class="d-flex h-100 align-items-center">
        <div class="container">
            <header class="text-center mb-5">
                <h2 class="text-uppercase lined">DOWNLOAD</h2>
            </header>
            <div class="row">
                <el-table
                        @row-click="rows"
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            label="序号"
                            type="index"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="icon"
                            label="图标"
                            width="80"
                            align="center">
                        <template slot-scope="scope">
                            <img :src="tableData[scope.$index].icon"  class="iconImg">
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="软件名称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="introduce"
                            label="简介"
                    >
                    </el-table-column>
                </el-table>            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "download",
        data() {
            return {
                tableData: [
                    {
                    icon: require('@/assets/dowmload/webstorm.png'),
                    name: 'webstorm',
                    introduce: "前端开发工具，类似于sublime多了控制台操作",
                    src:"http://www.jetbrains.com/webstorm/download/#section=windows"
                    },
                    {
                        icon: require('@/assets/dowmload/nodejs.png'),
                        name: 'node.js',
                        introduce: "后台开发环境，装vue依赖和组件。选择LTS稳定版",
                        src:"https://nodejs.org/en/"

                    },
                    {
                        icon: require('@/assets/dowmload/xmind.png'),
                        name: 'xMind',
                        introduce: "思维导图制作工具",
                        src:"https://www.xmind.net/download/"

                    },
                    {
                        icon: require('@/assets/dowmload/xiaopiu.png'),
                        name: 'xiaopiu',
                        introduce: "原型设计工具，支持团队操作，下载组件",
                        src:"https://www.xiaopiu.com/download"


                    },
                    {
                        icon:require('@/assets/dowmload/xcx.png'),
                        name: '小程序开发工具',
                        introduce: '类似vue语言开发小程序。',
                        src:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"

                    }, ]
            };
        },
        methods: {
            rows(row){
                console.error(row.name)
                window.open(row.src,'_blank')
            }

        }
    }
</script>

<style scoped>
    .iconImg{width: 50px;height: 50px}

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
</style>