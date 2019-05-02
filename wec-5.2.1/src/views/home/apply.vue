<template>
    <section>
        <div class="d-flex h-100 align-items-center">
            <div class="container">
                <header class="text-center mb-5">
                    <h2 class="text-uppercase lined">JOIN US</h2>
                </header>
                <div class="row">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  :style="{width:bcheight}">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" prop="phone">
                            <el-input v-model="ruleForm.phone" ></el-input>
                        </el-form-item>
                        <el-form-item label="qq" prop="qq">
                            <el-input v-model="ruleForm.qq" ></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="ruleForm.email" ></el-input>
                        </el-form-item>

                        <el-form-item label="班级" prop="youclass">
                            <el-input v-model="ruleForm.youclass" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                        <el-form-item>
                            <p style="color: red;">请认真填写，只能提交一次</p>
                        </el-form-item>
                    </el-form>
                    <img src="@/assets/img/ein-steig.jpg" class="applyImg" v-if="applyImg">
                </div>
                <footer class="py-5 mt-5">
                    <div class="row">
                        <div class="col-lg-6 text-center text-lg-left">
                            <p class="font-italic mb-0 text-gray">Copyright &copy; 2019.4，weC All rights reserved.</p>
                        </div>
                        <div class="col-lg-6 text-center text-lg-right">
                            <p class="font-italic mb-0 text-gray"></p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "signUp",
        data() {
            return {
                ruleForm: {
                    name: '',
                    phone: '',
                    qq: '',
                    email: '',
                    youclass: ''
                },
                applyImg:true,
                bcheight:"",
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '手机号', trigger: 'blur' },
                        { min: 11, max:11, message: '手机长度11个字符', trigger: 'blur' }
                    ],
                    qq: [
                        { required: true, message: '请输入qq', trigger: 'blur' },
                        { min: 7, max:11, message: '长度7-11个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
                    ],
                    youclass: [
                        { required: true, message: '请输入班级', trigger: 'blur' },
                        { min: 3, max:11, message: '请输入正确班级格式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            getTime(){
                let date=new Date()
                let year=date.getFullYear()
                let month=date.getMonth()+1
                let day=date.getDate()
                console.error("year:"+year+"month:"+month+"day:"+day)
                return year+"-"+month+"-"+day
            },
            setApply(formName){
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                console.error("验证通过")
                this.$ajax.post('http://39.108.162.102:3000/api/setApply', {
                    time: this.getTime(),name:this.ruleForm.name,phone:this.ruleForm.phone,
                    qq:this.ruleForm.qq,email:this.ruleForm.qq,stuclass:this.ruleForm.youclass
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
            },

            //判断是否提交过
            onceapply(formName){
                let setApply = localStorage.getItem('setUserApply')
                if(!setApply){
                    localStorage.setItem('setUserApply',123)
                    this.setApply(formName)
                }
                else{
                    this.$message({
                        message: '你已经提交过申请，请勿重复提交',
                        type: 'warning'
                    });
                }

            },
            //确认按钮提交后
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.setApply(formName)
                    } else {
                        this.$message({
                            message: '验证未通过',
                            type: 'warning'
                        });
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            screenss: function() {

                const screenWidth = document.body.clientWidth;
                if (parseInt(screenWidth) < 888) {
                    {
                        this.bcheight = "80%"
                        this.applyImg=false
                    }
                } else {
                    this.bcheight = "40%"
                }

            }
        },
        mounted() {
            this.screenss();
        }
    }
</script>

<style scoped>
    .applyImg{width: 372px;height:352px;margin-left: 30px}

    .demo-ruleForm{width: 100%}
    .d-flex{display:-ms-flexbox!important;display:flex!important}
    .h-100{height:100%!important}
    .align-items-center{-ms-flex-align:center!important;align-items:center!important}

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
    .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}
    .col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;}
    .col-lg-6,.col-lg-12{position:relative;width:100%;padding-right:15px;padding-left:15px}
    .mb-0{margin-bottom:0!important}
    .py-5{padding-top:3rem!important;padding-bottom:3rem!important}
    .mt-5,.my-5{margin-top:3rem!important}
    .text-lg-left{text-align:left!important}
    .text-lg-right{text-align:right!important}
    .font-italic{font-style:italic!important}
    .text-gray {
        color: #999 !important;
    }
</style>