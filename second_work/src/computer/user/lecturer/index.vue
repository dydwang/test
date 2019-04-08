<!--//********  讲师首页  ***************-->
<template>
    <div style="width: 100%;height: 100%;margin-top: 10px">
        <rightNav :listNavigation="listNavigation" ></rightNav>

        <router-view style="margin-left: 20%" ></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                listNavigation:[
                    {name:"我的课程",interface:"lecturer_admin"},
                    {name:"申请教室",interface:"lecturer_applyClassroom"},
                    {name:"变课",interface:"lecturer_changeTimetable"},
                    {name:"我的工作量",interface:"lecturer_lecturerWorkload"},
                ],
            }
        },

    }
</script>

<style scoped>

</style>