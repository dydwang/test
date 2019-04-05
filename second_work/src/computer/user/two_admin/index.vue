<!--/*******  二级管理员首页  **********-->
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
                  {name:"变课情况",interface:"two_collegeApplication"},
                  {name:"注册审核",interface:"two_oneRegistion"},
                  {name:"工作量审核",interface:"two_schoolLecturerWorkload"},
                  {name:"课程大纲审核",interface:"two_syllabusExamination"},
                    ],
          }
        },
    }

</script>

<style scoped>

</style>