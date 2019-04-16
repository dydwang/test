<template >  <!--登录************************************************************-->
    <div style="margin-left: 50%">
        <div  class="formClass" >
        <el-form :inline="true" :model="formInline" class="demo-form-inline"  >


            <!--*****************选择权限*********************-->
            <el-form-item label="登录权限" style="margin-left: 47px;margin-top: 2px">
                <el-select v-model="formInline.admin"  @change="changeAdmin(formInline.admin)"

                >
                    <el-option label="学生" value="student_admin"></el-option>
                    <el-option label="讲师" value="lecturer_admin"></el-option>
                    <el-option label="一级管理员" value="one_admin"></el-option>
                    <el-option label="二级管理员" value="two_admin"></el-option>
                </el-select>
            </el-form-item>

            <!--权限为学生时*******************************************************-->
            <!--**************************************-->
            <el-form-item v-if="studentAdmin">

                <!--   filterable 可搜索   change-on-select是否允许选择任意一级的选项-->
                <!--   expand-trigger="hover"  hover 触发子菜单-->
                <el-cascader
                        placeholder="请选择班级"
                        filterable
                        change-on-select
                        :show-all-levels="false"
                        expand-trigger="hover"
                        :options="classInformation"
                        v-model="formInline.choosingClasses"
                        @change="changeClass"
                         style="margin-left: 90px"  >
                </el-cascader>
                <identifys @transferRandom="getRandomChars" ref="son"></identifys>
                <el-input

                            style="height: 50px;width:215px;margin-left: 90px;
                            margin-top: 10px "
                            placeholder="验证码"
                            v-model="formInline.verification">
                </el-input>

            </el-form-item>



            <!--权限不为学生时*************************-->
            <!--**************************************-->
            <el-form-item v-if="teacherAdmin">

                <identifys @transferRandom="getRandomChars" ref="son"></identifys>

                <el-form-item prop="accountNumber"
                              :rules="[
                        { required: true, message: '账号不能为空'} ]">
                    <el-input   style="height: 50px;width:215px;margin-left: 90px;
                                margin-top: 5px "
                                placeholder="账号"
                                v-model="formInline.accountNumber">
                    </el-input>
                </el-form-item>

                <el-form-item prop="accountNumber"
                              :rules="[
                        { required: true, message: '密码不能为空'} ]">
                    <el-input   style="height: 50px;width:215px;margin-left: 90px;
                            margin-top: 5px "
                            placeholder="密码"
                            v-model="formInline.password">

                    </el-input>
                </el-form-item>
                <el-input   style="height: 50px;width:215px;margin-left: 90px;
                            margin-top: 5px "
                            placeholder="验证码"
                            v-model="formInline.verification">

                </el-input>

                <router-link to="forgetPassword">
                    <span style="margin-left: 10px;color: #f50853;">忘记密码?</span>
                </router-link>

                <router-link to="signUp">
                    <span style="margin-top: -80px;margin-left: 10px;color: #f50853;">注册账号</span>
                </router-link>

            </el-form-item>

            <el-button type="primary" @click="protectLogin('formInline')" style="width: 255px;
                       margin-left: 70px;margin-top: -10px"  :disabled="isDisable">登录
            </el-button>
            <span>（测试，不需要账号密码,需要验证码+++）</span>
        </el-form>
    </div>
    </div>
</template>

<script>


import identifys from "@/computer/components/identifys"
    export default {
        data() {
            return {
                formInline:
                    {
                        admin:"student_admin",
                        choosingClasses: [],           //班级
                        verification:"",              //验证码
                        accountNumber:"",             //账号
                        password:"",                   //密码
                    },
                studentAdmin:true,
                teacherAdmin:"",
                oneAdmin:"",
                twoAdmin:"",
                classInformation: [],
                photoVerification:[],
                getRandom:"",                         //获取的验证码
                isDisable: false                        //保护
            }
        },
        methods: {
            //
            changeAdmin(admin){
                this.studentAdmin=false;
                this.teacherAdmin=false;
                if(admin==="student_admin") this.studentAdmin=true
                else this.teacherAdmin=true

            },
            changeClass() {
                console.log(this.choosingClasses);
            },
            //获取identifys的验证码
            getRandomChars(msg){
                this.getRandom=msg
               // console.error(msg)
            },

                //保护
            protectLogin(formIn){
                this.isDisable = true
                setTimeout(() => {
                    this.isDisable = false
                }, 400)

                this.login(formIn)
            },

            login(formIn) {  //判断验证码与账号密码
                //输入的验证码变为大写
                const {$router}=this;
                let verifications = this.formInline.verification.toUpperCase()

                //学生权限时！！！！！！！！！！！！
                //console.error(formIn)
                if (this.studentAdmin === true) {
                    //console.error(verifications)  验证码错误
                    if (verifications !== this.getRandom) {
                        this.formInline.verification=""    //重置
                        console.error(this.formInline.admin)
                        this.$refs.son.drawPic()  //刷新验证码
                        this.$message({message: '验证码或密码错误', type: 'warning'});//console.error(this.$store.state.a+"a")  调用state数据
                    }
                            //验证码正确
                    else{
                        sessionStorage.setItem('user', this.formInline.admin);
                        $router.push(this.formInline.admin)
                    }
                }
                        //权限不为学生时！！！！！！！！！！
                if (this.studentAdmin !== true) {
                    //console.error(verifications)  验证码错误
                    if (verifications !== this.getRandom) {
                        this.formInline.verification=""    //重置
                        this.formInline.password=""
                        console.error(this.formInline.admin)
                        this.$refs.son.drawPic()  //刷新验证码
                        this.$message({message: '验证码或密码错误', type: 'warning'});//console.error(this.$store.state.a+"a")  调用state数据
                        console.error("verifications")
                        //判断账号密码
                    }
                     else if(this.formInline.accountNumber===''&&this.formInline.password===''){
                        sessionStorage.setItem('user', this.formInline.admin);
                            $router.push(this.formInline.admin)
                        }
                    //验证码正确
                }
            }

        },
        mounted(){
            let that = this
            this.$ajax.get('/classInformation')
                .then(function (res){
                    that.classInformation = res.data.data
                })
        },
        components:{
            identifys,

        }
    }


</script>

<style scoped>
    *{float: left;}
.formClass{
    width: 400px;
    height: 420px;
    border: skyblue 1px solid;
    margin-top: 50px;

}

</style>
<style>
    .el-form-item__error{
        margin-top: -40px;
    }

</style>