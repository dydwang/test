<template>
    <div>
        <el-popover
                placement="left"
                trigger="click"
                >
            <el-form :inline="true" :model="formInline" class="form"  status-icon  :rules="rules">
                <el-form-item >

                    <identifys @transferRandom="getRandomChars" ref="son"></identifys>

                    <el-form-item prop="username">
                        <el-input   class="forminput"
                                    placeholder="账号"
                                    v-model="formInline.username"
                                    @change="verificationUsername">
                        </el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input  class="forminput"
                                    placeholder="密码"
                                    v-model="formInline.password">

                        </el-input>
                    </el-form-item>
                    <el-input
                            class="forminput"
                                placeholder="验证码"
                                v-model="formInline.verification">

                    </el-input>

                </el-form-item>

                <el-button type="primary" @click="protectLogin(formInline)" style="width: 255px;
                       margin-left: 25px;margin-top: -10px"  :disabled="isDisable">登录
                </el-button>
            </el-form>
            <el-button slot="reference">weC</el-button>
        </el-popover>

    </div>
</template>

<script>
    import identifys from "./identifys"

    export default {
        name: "signIn",
        components:{
            identifys
        },
        data() {
            return {
                formInline:
                    {
                        verification:"",              //验证码
                        username:"",             //账号
                        password:"",                   //密码
                    },

                getRandom:"",                         //获取的验证码
                isDisable: false,                        //保护
                CorrectPassword:"" ,                     //获取密码
                rules: {
                    username: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入班级', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            //验证账号
            verificationUsername(){
                // let that = this
                // this.$ajax.get("/api/getValue",{
                //     params:{id:this.formInline.accountNumber}
                // }).then((res)=>{
                //     that.CorrectPassword=res.data[0].password
                //     console.error(res.data[0].password)
                // })
            },
            //

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

            //连接数据库  获取密码
            getUsername(formIn) {
                const loading = this.$loading({lock: true, text: '拼命加载中...', spinner: 'el-icon-loading'})
                let that=this
                // axios.get('/', {params: ''})
                this.$ajax.get('http://39.108.162.102:3000/api/getUsername', {
                    params: {username: formIn.username}
                }).then( (res) => {
                    if(formIn.password===res.data[0].password) {
                        let {$router}=this;
                        //密码正确后跳转管理员界面
                        sessionStorage.setItem('user', res.data);
                        loading.close()
                        $router.push("admin")
                    }
                    //console.log('res.data[0].username=', res.data[0].username);
                    return true
                }).catch(()=>{
                    this.$message({message: '网络出错', type: 'warning'});//console.error(this.$store.state.a+"a")  调用state数据
                    loading.close()

                })

            },

            login(formIn) {  //判断验证码与账号密码

                //输入的验证码变为大写
                let verifications = formIn.verification.toUpperCase()
                    //  如果输入的验证码与获取的验证码不一样重置验证码与密码
                    if (verifications !== this.getRandom  ) {
                        this.formInline.verification=""    //重置
                        this.formInline.password=""
                        this.$refs.son.drawPic()  //刷新验证码
                        this.$message({message: '验证码或密码错误', type: 'warning'});//console.error(this.$store.state.a+"a")  调用state数据
                        //判断账号密码
                    }

                    //验证码正确后 验证密码
                    else if(verifications === this.getRandom ){
                        this.getUsername(formIn)
                    }
            }

        },
    }
</script>

<style scoped>
    .form{
        width: 300px;
        height: 350px;
        border: skyblue 1px solid;
        margin-top: 10px;
        border-radius: 20px;
        background-color: #fff;

    }

    .forminput{
        height: 50px;width:215px;margin-left: 45px;
        margin-top: 5px
    }
</style>