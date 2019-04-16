<template>
    <el-form ref="form" :model="form" label-width="80px" style="width:90%;border:0.1px solid #f1e7e7" id="elform" size="mini" >
    <el-form-item  style="text-align: center;">
        <span style="font-size:30px">变课申请</span>
    </el-form-item>
        <div style="height: 50px">
            <el-form-item label="学期" style="width:30% ;float: left">
                <el-cascader
                        v-model="Semester"
                        @change="handleChange">
                </el-cascader>
            </el-form-item>
            <el-form-item label="变课类型" style="width:30% ;float: left">
                <el-select
                        v-model="Semester"
                        @change="handleChange">
                    <el-option label="学生" value="student_admin"></el-option>
                    <el-option label="讲师" value="lecturer_admin"></el-option>
                    <el-option label="一级管理员" value="one_admin"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="编号" style="width:30%;float: left  ">

            </el-form-item>
        </div>

    <div style="height: 50px">
            <el-form-item label="课程" style="width:30% ;float: left">
                <el-cascader
                        v-model="Semester"
                        @change="handleChange">
                </el-cascader>
            </el-form-item>
            <el-form-item label="班级" style="width:30% ;float: left">
                <el-cascader
                        expand-trigger="hover"
                        :options="options"
                        v-model="Semester"
                        @change="handleChange">
                </el-cascader>
            </el-form-item>
            <el-form-item label="时间" style="width:30%;float: left  ">
                <el-cascader
                        v-model="Semester"
                        @change="handleChange">
                </el-cascader>
            </el-form-item>
    </div>

    <div style="width: 85%;;margin-left: 80px;height:300px;border:0.1px solid #f1e7e7;margin-bottom: 10px">

    </div>
    <el-form-item label="变动原因" >
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
</el-form>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    Semester:"ss",
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style scoped>
    .el-form-item {
        margin-bottom: 10px;
    }
    .el-form-item__content{
        position:initial;
    }
</style>