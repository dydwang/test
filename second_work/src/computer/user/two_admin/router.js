const two_admin = () =>import("./src/main")
const two_admin_index = () =>import("./index")
const two_collegeApplication = () =>import("./src/collegeApplication")
const two_oneRegistion = () =>import("./src/oneRegistion")
const two_schoolLecturerWorkload = () =>import("./src/schoolLecturerWorkload")
const two_syllabusExamination = () =>import("./src/syllabusExamination")



let routes=[

    {
        path: "/two_admin_index",
        name: "two_admin_index",
        component: two_admin_index,
        meta:{
            require_two_admin:true    //需要权限
        },
        children:[
            {
                path: "/two_admin",
                name: "two_admin",
                component: two_admin,
                meta:{
                    require_two_admin:true    //需要权限
                }
            },
            {
                path: "/two_collegeApplication",
                name: "two_collegeApplication",
                component: two_collegeApplication,
                meta:{
                    require_two_admin:true    //需要权限
                }
            },
            {
                path: "/two_oneRegistion",
                name: "two_oneRegistion",
                component: two_oneRegistion,
                meta:{
                    require_two_admin:true    //需要权限
                }
            },
            {
                path: "/two_schoolLecturerWorkload",
                name: "two_schoolLecturerWorkload",
                component: two_schoolLecturerWorkload,
                meta:{
                    require_two_admin:true    //需要权限
                }
            },
            {
                path: "/two_syllabusExamination",
                name: "two_syllabusExamination",
                component: two_syllabusExamination,
                meta:{
                    require_two_admin:true    //需要权限
                }
            },
        ]
    },


];



export default routes;
