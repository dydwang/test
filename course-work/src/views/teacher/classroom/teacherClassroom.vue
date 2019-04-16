<template>
    <div>
        <div class="option">
            <div class="block" style="margin-right: 80px;margin-bottom: 20px">
                <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </div>

            <div style="margin-right: 70px;margin-bottom: 20px">
                <el-select v-model="value" placeholder="请选择实验楼">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div style="margin-bottom: 20px">
                <el-select v-model="value1" placeholder="请选择房间号">
                    <el-option
                            v-for="item in options1"
                            :key="item.value1"
                            :label="item.label1"
                            :value="item.value1">
                    </el-option>
                </el-select>
            </div>
        </div>
        <table class="table">
            <tr>
                <td>时间</td>
                <td>教学大楼</td>
                <td>房间号</td>
                <td>实验室名称</td>
                <td>面向专业</td>
                <td>容纳人数</td>
                <td></td>
            </tr>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.time}}</td>
                <td>{{item.jx}}</td>
                <td>{{item.fj}}</td>
                <td>{{item.name}}</td>
                <td>{{item.zy}}</td>
                <td>{{item.rs}}</td>
                <td>
                    <el-popover
                            placement="right"
                            width="700"

                            trigger="click" tag="button"  class="button" size="mini">
                        <el-button slot="reference" type="primary" size="mini">查看</el-button>
                        <classroomApplication :item="item"></classroomApplication>
                    </el-popover>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import classroomApplication from "./classroomApplication";

    export default {
        name: 'teacherClassroom',
        data () {
            return {
                list: [
                    {time: '2019-01-01', jx: '三实验楼', fj: '308', name: '综合实验室', zy: '全校各专业', rs: '25', zt: '空闲', },
                    {time: '2019-01-01', jx: '三实验楼', fj: '309', name: '综合实验室', zy: '全校各专业', rs: '25', zt: '空闲', },

                    {time: '', jx: '', fj: '', name: '', zy: '', rs: '', zt: '', fz: ''},

                ],
                value2:'',
                options: [{
                    value: '选项1',
                    label: '一实验室'
                }, {
                    value: '选项2',
                    label: '二实验室'
                }, {
                    value: '选项3',
                    label: '三实验室'
                }, {
                    value: '选项4',
                    label: '三教学楼'
                }],
                value: '', options1: [{
                    value1: '选项1',
                    label1: '209'
                }, {
                    value1: '选项2',
                    label1: '308'
                }, {
                    value1: '选项3',
                    label1: '404'
                }, {
                    value1: '选项4',
                    label1: '207'
                }],
                value1: ''
            }
        },
        components:{classroomApplication}
    }




</script>

<style scoped>
    .table{
        width: 90%;
        min-height: 25px;
        line-height: 25px;
        text-align: center;
        border-collapse: collapse;
    }
    .table td{
        border:1px solid #000;
    }
    .button{
        background: aqua;
        border:none;
        border-radius: 5px;
        height: 80%;
        width: 70%;
        text-align: center;
    }
    .option > div{
        float: left;
    }
    .el-input__inner{
        height:40px
    }
</style>
