<template>
    <div>
        <HeadBox></HeadBox>
        <div style="margin-top: 100px;width: 80%;margin-left: 10%">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动类型">
                <el-radio v-for="(sport,index) in sports" :key="index" v-model="form.name"
                          :label="sport" size="mini">{{sport}}</el-radio>
            </el-form-item>
            <el-form-item label="活动地址">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
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
                <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动详情">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="onSubmit">取消</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script> import HeadBox from "@/phone/components/header/Header.vue";
    export default {
        name: "newActive",
        data() {
            return {
                form: {
                    name: '1',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',

                },
                sports:["旅游","篮球","足球","乒乓球","游泳","象棋","画画",
                    "爬山","网球","跳舞","健身","排球"],
            }
        },
        methods: {
            onSubmit() {
                const {$router}=this
                $router.push("/")
            }
        },
        components:{HeadBox}
    }
</script>

<style scoped>

</style>