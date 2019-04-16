<template>
    <div style="width: 100%;margin-top: 10px">
        <span class="span">{{item.time}} </span>
        <span class="span">{{item.jx}} </span>
        <span class="span">{{item.fj}} </span>

        <el-table
                border
                :data="tableData1"
                style="width: 100%;margin-top: 10px;"
               >
           <el-table-column v-for="(frequency,index) in 6" :key="index" :label="frequency">

           </el-table-column>

       </el-table>
        <el-table
                border
                :data="tableData2"
                style="width: 100%">
            <el-table-column v-for="(frequency,index) in 6" :key="index" :label="frequency+6">

            </el-table-column>

        </el-table>
        <el-select v-model="one" placeholder="1-12" style="margin-right:10px ">
            <el-option
                    v-for="(item,index) in 12"
                    :key="index"
                    :value="item">
            </el-option>
        </el-select>
        <el-select v-model="two" placeholder="请选择" style="margin-right:10px ">
            <el-option
                    :value="one">
            </el-option>
            <el-option
                    :value="one+1">
            </el-option>

        </el-select>
        <el-button type="primary" >
            申请
        </el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                liu:[1,2,3,4,5,6],
                liu2:[1,2,3,4,5,6,7,8,9,10,11,12],
                one:"",
                two:"",
                tableData1:[],
                tableData2:[]


            }
        },
        methods: {
            onSubmit() {
            }
        },
        props:['item']
    }
</script>
<style>
    .span{
        font-size: 18px;
        font-weight: 600;
    }
</style>