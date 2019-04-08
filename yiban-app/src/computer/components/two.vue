  <!--********  教师个人工作表组件   *******-->
<template>
    <el-table
            :data="tableData"
            style="width: 80%"
            :row-class-name="tableWorkload" >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="curriculumName" label="课程名称" ></el-table-column>
        <el-table-column prop="curriculumNum" label="课程编号"  ></el-table-column>
        <el-table-column prop="class" label="班级" ></el-table-column>
        <el-table-column prop="curriculumNature" label="独立/课带" ></el-table-column>
        <el-table-column prop="executiveHours" label="执行学时"  ></el-table-column>
        <el-table-column prop="nowHours" label="已上学时"  ></el-table-column>
        <el-table-column prop="repetitions" label="重复次数" ></el-table-column>
        <el-table-column  label="工作量=执行学时*(1+1*重复次数)">
            <template slot-scope="scope">
                {{tableData[scope.$index].executiveHours*(1+tableData[scope.$index].repetitions)}}
            </template>
        </el-table-column>
    </el-table>
</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

<script>
    export default {
        methods: {
            tableWorkload({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
        },
        data() {
            return {
                tableData: [{
                    curriculumName: '王小虎',    //课程名称
                    curriculumNum: '1523059',   //课程编号
                    class:'网工171',           //班级
                    curriculumNature:'独立',  //课程性质
                    executiveHours:36,       //执行学时
                    nowHours:12,            //已上学时
                    repetitions:2,         //重复次数
                    }]
            }

        },
    }
</script>