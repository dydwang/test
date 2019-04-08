<template>
    <el-table
            :data="tableData"
            border
            style="width: 80%">
        <el-table-column
                prop="lecturerName"
                label="姓名"
                >
        </el-table-column>
        <el-table-column
                prop="workNum"
                label="工号"
                >
        </el-table-column>
        <el-table-column
                prop="position"
                label="职称"
                >
        </el-table-column>

        <el-table-column
                prop="subordinateDepartments"
                label="所属学院/部门">
        </el-table-column>
        <el-table-column
                prop="totalWorkload"
                label="实验课总工作量">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    lecturerName: '王小虎',
                    workNum: 123456,
                    position: '副教授',
                    subordinateDepartments: 'xxx学院',
                    totalWorkload: '2016-05-03',
                }]
            }
        }
    }
</script>