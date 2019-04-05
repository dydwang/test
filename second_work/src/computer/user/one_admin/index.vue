<!--***********一级管理员首页  *******************-->

<template>
    <div style="width: 100%;height: 100%;margin-top: 10px">
        <rightNav :listNavigation="listNavigation"></rightNav>

        <router-view ></router-view>
    </div>
    
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                listNavigation:[
                    {name:"排课",interface:"one_timetableSchedule"},
                    {name:"变课审批",interface:"one_lecturerApplication"},
                    {name:"工作量审核",interface:"one_collegeLecturerWorkload"},
                    {name:"申请教室审核",interface:"one_lecturerApplyClassroom"},
                    {name:"教师注册审批",interface:"one_lecturerRegistration"},
                    {name:"实验课程大纲",interface:"one_syllabusTypesetting"},



                ],
            }
        },
    }
</script>

<style scoped>

</style>