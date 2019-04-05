const one_admin = () =>import("./src/main")
const one_admin_index = () =>import("./index")
const one_collegeLecturerWorkload = () =>import("./src/collegeLecturerWorkload")
const one_lecturerApplication = () =>import("./src/lecturerApplication")
const one_lecturerApplyClassroom = () =>import("./src/lecturerApplyClassroom")
const one_lecturerRegistration = () =>import("./src/lecturerRegistration")
const one_syllabusTypesetting = () =>import("./src/syllabusTypesetting")
const one_timetableSchedule = () =>import("./src/timetableSchedule")



let routes=[

    {
        path: "/one_admin_index",
        name: "one_admin_index",
        component: one_admin_index,
        meta:{
            require_one_admin:true    //需要权限
        },
        children:[
            {
                path: "/one_admin",
                name: "one_admin",
                component: one_admin,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
            {
                path: "/one_collegeLecturerWorkload",
                name: "one_collegeLecturerWorkload",
                component: one_collegeLecturerWorkload,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
            {
                path: "/one_lecturerApplication",
                name: "one_lecturerApplication",
                component: one_lecturerApplication,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
            {
                path: "/one_lecturerApplyClassroom",
                name: "one_lecturerApplyClassroom",
                component: one_lecturerApplyClassroom,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
            {
                path: "/one_lecturerRegistration",
                name: "one_lecturerRegistration",
                component: one_lecturerRegistration,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
            {
                path: "/one_syllabusTypesetting",
                name: "one_syllabusTypesetting",
                component: one_syllabusTypesetting,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
            {
                path: "/one_timetableSchedule",
                name: "one_timetableSchedule",
                component: one_timetableSchedule,
                meta:{
                    require_one_admin:true    //需要权限
                }
            },
        ]
    },


];



export default routes;
