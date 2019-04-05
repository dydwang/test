<template>
    <div>
        <HappyScroll :min-length-h="20">



        <div style="width: 90%;margin-left: 5%;height: 700px;padding-top: 10px;
  padding-bottom: 0;margin-bottom: 0px">
        <el-form ref="form" :model="form" label-width="80px" style="width: 90%;text-align: left" id="form"  :rules="rules">
            <el-form-item label="活动类型" prop="radio">
                <el-radio v-for="(sport,index) in sports" :key="index" v-model="form.radio" :label="sport"
                          size="mini" style="width: 60px;height: 19px;padding-left: 0px;margin-right: 10px">{{sport}}</el-radio>
            </el-form-item>
            <el-form-item label="活动地址" prop="dizi">
                <el-input v-model="form.dizi"></el-input>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-checkbox-group v-model="form.resource">
                    <el-checkbox label="线上品牌商赞助"></el-checkbox>
                    <el-checkbox label="线下场地免费"></el-checkbox>
                    <el-checkbox label="其他">
                        <el-input placeholder="其他">

                        </el-input>
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="活动图片"><photo></photo> </el-form-item>
            <el-form-item label="活动详情" prop="desc">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                <el-button @click="onSubmit">取消</el-button>
            </el-form-item>
        </el-form><div style="height: 300px;width: 80%"></div>
        </div>

        </HappyScroll>
    </div>
</template>

<script> import HeadBox from "@/phone/header/Header.vue";
import BoBox from "@/phone/bottom/boBox.vue";    import { HappyScroll } from 'vue-happy-scroll'
import photo from "@/phone/component/photo"
export default {
        name: "newActive",
        data() {
            // var formRadio = (rule, value, callback) => {
            //         if (!value) {
            //             return callback(new Error('年龄不能为空'));
            //         }}
            return {
                form: {
                    radio: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: [],
                    desc: '',
                    dizi:""
                },
                sports:["旅游","篮球","足球","乒乓球","游泳","象棋","画画",
                    "爬山","网球","跳舞","健身","排球"],
                rules:{
                    radio:[{ required: true, message: '请选择活动类型', trigger: 'change' }],
                    desc:[{ required: true, message: '请填写活动形式', trigger: 'blur' }],
                    dizi:[{ required: true, message: '请填写活动地址', trigger: 'blur' }],
                    date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                    date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                }
            }
        },
        methods: {
            onSubmit(form) {

                this.$refs[form].validate((valid) => {
                    if (valid) {
                        const {$router}=this
                        $router.push("/cjcg")
                    } else {
                        return false;
                    }
                });

            }
        },
        components:{HeadBox,BoBox,HappyScroll,photo},
    mounted(){let form=document.getElementById("form")
        if (parseInt(document.body.clientWidth) < 350){

            form.style.height = "1480px";
        }
        else if(parseInt(document.body.clientWidth) <380){

            form.style.height = "1180px";
        }
        else form.style.height = "1100px";
    }
    }
</script>

<style scoped>

</style>

