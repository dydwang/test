<template>
    <el-table
            @row-click="rows"
            :data="tableData"
            style="width: 90%;margin-left: 5%"
            >
        <el-table-column
                label="序号"
                type="index"
                width="80">
        </el-table-column>
        <el-table-column
                label="类型"
                prop="type"
                width="80">
        </el-table-column>
        <el-table-column
                label="内容"
                prop="infor"
                >
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "table",
        data(){
            return{
                tableData:[],
            }
        },
        props:['posts','tableNames'],
        methods:{
            rows(row){
                window.open(row.src,'_blank')
            },
            getZhujina() {
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                let that=this
                let url='http://39.108.162.102:3000/api/getZhujian'
                this.$ajax.get(url, {
                    params: {tableName:this.posts}
                }).then( (res) => {
                    that.tableData=res.data
                    // for(let i=0;i<res.data.length;i++){
                    //     that.srcimg.push(require(res.data[i].icon))
                    // }
                }).catch(loading.close())
                loading.close()
            },
        },
        mounted(){
            this.getZhujina()
        },
    }
</script>

<style scoped>

</style>