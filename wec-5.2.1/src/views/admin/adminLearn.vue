<template>
    <div style="width: 100%">
        <el-button v-for="(item,index) in types" :key="index" @click="chance(item)">{{item.cha}}</el-button>
        <el-button @click="dialogVisible=true" class="tianjia">添加</el-button>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%">
            <el-input v-model="downloadform.index" placeholder="index"></el-input>
            <el-input v-model="downloadform.type" placeholder="类型"></el-input>
            <el-input v-model="downloadform.infor" placeholder="内容"></el-input>
            <el-input v-model="downloadform.src" placeholder="src"></el-input>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="setZhujian()">确 定</el-button>
        </el-dialog>
        <el-table
                @row-click="rows"
                :data="tableData"
                style="margin-left: 10%"
                width="90%"
        >
            <el-table-column
                    label="序号"
                    type="index"
                    width="80">
            </el-table-column>
            <el-table-column
                    label="类型"
                    prop="type"
                    width="100">
            </el-table-column>
            <el-table-column
                    label="内容"
                    prop="infor"
                    width="500"
            >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "table",
        data(){
            return{
                tableData:[],
                type:"zhujian",
                types:[
                    {cha:"组件",en:"zhujian"},
                    {cha:"依赖",en:"yilai"},
                    {cha:"安装",en:"anzhuang"},
                    {cha:"经验",en:"jinyan"},
                ],
                downloadform:{
                    index:"",
                    type:"",
                    infor:"",
                    src:""
                },
                dialogVisible: false
            }
        },
        methods:{
            chance(item){
                this.type=item.en
                this.getZhujina()
            },
            rows(row){
                window.open(row.src,'_blank')
            },
            getZhujina() {
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                let that=this
                let url='http://39.108.162.102:3000/api/getZhujian'
                this.$ajax.get(url, {
                    params: {tableName:this.type}
                }).then( (res) => {
                    that.tableData=res.data
                    // for(let i=0;i<res.data.length;i++){
                    //     that.srcimg.push(require(res.data[i].icon))
                    // }
                }).catch(loading.close())
                loading.close()
            },
            setZhujian() {
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                this.$ajax.post('http://39.108.162.102:3000/api/setZhujian', {
                    index:this.downloadform.index,type:this.downloadform.type,
                    infor:this.downloadform.infor,src:this.downloadform.src,
                    tableName:this.type
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
            }
        },
        mounted(){
            this.getZhujina()
        },
    }
</script>

<style scoped>

</style>