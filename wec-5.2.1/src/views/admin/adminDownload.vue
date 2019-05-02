<template>
    <div class="d-flex h-100 align-items-center">
        <div class="container">
            <div class="row">
                <el-table
                        @row-click="rows"
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            label="序号"
                            type="index"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="icon"
                            label="图标"
                            width="150">
                        <template >
                            <!--<img :src="require(srcimg)"/>-->
                            <!--:src="require(luji+tableData[scope.$index].icon)"-->
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="软件名称"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="introduce"
                            label="简介"
                            width="250">
                    </el-table-column>
                </el-table>            </div>

        </div>
        <el-button @click="dialogVisible=true" class="tianjia">添加</el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <el-input v-model="downloadform.icon" placeholder="icon"></el-input>
            <el-input v-model="downloadform.name" placeholder="name"></el-input>
            <el-input v-model="downloadform.introduce" placeholder="introduce"></el-input>
            <el-input v-model="downloadform.src" placeholder="src"></el-input>
            <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="setDownload()">确 定</el-button>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "adminDownload",
        data(){
            return{
                srcimg: '../../assets/dowmload/webstorm.png',

                background:{
                    backgroundImage:'url("../../assets/dowmload/webstorm.png")'
                },
                luji:'@/assets/dowmload/',
                houzui:".png",
                tableData: [],
                downloadform:{
                    icon:"",
                    name:"",
                    introduce:"",
                    src:""
                },
                dialogVisible: false

            }
        },
        methods: {
            setDownload(){
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                this.$ajax.post('http://localhost:3000/api/setDownload', {
                    name:this.downloadform.name,icon:this.downloadform.icon,
                    introduce:this.downloadform.introduce,src:this.downloadform.src,
                }).then( (res) => {
                    this.$message({
                        message: '恭喜你，申请成功',
                        type: 'success'
                    });
                    // this.$refs[formName].resetFields();
                }).catch((res) =>{
                    loading.close()
                    this.$message({
                        message: '申请失败,可能是网络问题',
                        type: 'warning'
                    });
                })
                loading.close()
                this.dialogVisible= false
            },
            rows(row){
                console.error(row.name)
                window.open(row.src,'_blank')
            },
            getDownload() {
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                let that=this
                this.$ajax.get('http://39.108.162.102:3000/api/getDownload', {
                }).then( (res) => {
                    that.tableData=res.data
                    that.srcimg=res.data[1].icon
                    // for(let i=0;i<res.data.length;i++){
                    //     that.srcimg.push(require(res.data[i].icon))
                    // }
                }).catch(loading.close())
                loading.close()
            },
        },
    mounted(){
            this.getDownload()

    }
    }
</script>

<style scoped>
    .tianjia{
        height: 40px;
    }

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