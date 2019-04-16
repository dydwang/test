<template>
    <div>
        <table class="table1">
            <tr>
                <td colspan="1" style="width: 2%">时间</td>
                <td colspan="1" style="width: 2%">节数</td>

                <td>星期一</td>
                <td>星期二</td>
                <td>星期三</td>
                <td>星期四</td>
                <td>星期五</td>
                <td>星期六</td>
                <td>星期日</td>
            </tr>

            <tr>
                <td rowspan="4" colspan="1" style="width: 3%">上午</td>
                <td colspan="1" style="width: 4%">第一节</td>
                <td v-for="(item,index) in ke_1" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第二节</td>
                <td v-for="(item,index) in ke_2" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第三节</td>
                <td v-for="(item,index) in ke_3" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第四节</td>
                <td v-for="(item,index) in ke_4" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>

            <tr>
                <td rowspan="4" colspan="1" style="width: 2%">下午</td>
                <td colspan="1" style="width: 4%">第五节</td>
                <td v-for="(item,index) in ke_5" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 3%">第六节</td>
                <td v-for="(item,index) in ke_6" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第七节</td>
                <td v-for="(item,index) in ke_7" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 3%">第八节</td>
                <td v-for="(item,index) in ke_8" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td rowspan="4" colspan="1" style="width: 3%">晚上</td>
                <td colspan="1" style="width: 4%">第九节</td>
                <td v-for="(item,index) in ke_5" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第十节</td>
                <td v-for="(item,index) in ke_6" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第十一节</td>
                <td v-for="(item,index) in ke_7" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>
            <tr>
                <td style="width: 4%">第十二节</td>
                <td v-for="(item,index) in ke_8" :key="index">{{item.a}}<br/>{{item.b}}<br/>{{item.c}}<br/>{{item.d}}</td>
            </tr>



        </table>
    </div>
</template>

<script>
    import each from './each-kb.vue'
    export default {
        name: 'index',
        data () {
            return {
                ke_0: ['', '', '', '', '', '', ''],
                ke_1: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'},
                    {a: '大数据科学计算', b: '1-4(1,2)', c: '孙逊', d: '3号机房'}, {}, {}, {}, {}, {a: '大数据科学计算', b: '1-4(1,2)', c: '孙逊', d: '3号机房'}],
                ke_2: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []],
                ke_3: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []],
                ke_4: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []],
                ke_5: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []],
                ke_6: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []],
                ke_7: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []],
                ke_8: [{a: '机器学习原理及应用（双语课程）', b: '19-20(7,8)', c: '大数据外聘教师2', d: '4号机房'}, [], [], [], [], [], []]

            }
        },
        components: {
            'each': each
        }
    }
</script>

<style scoped>
    .table1{
        width: 100%;
        min-height: 25px;
        line-height: 25px;
        text-align: center;
        border-collapse: collapse;
    }
    .table1 td{
        border:1px solid #000;
        width: 11.1111111%;
    }
    .table tr{
    }
</style>
