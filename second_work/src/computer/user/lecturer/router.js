const lecturer_admin = () =>import("./src/main")
const lecturer_admin_index = () =>import("./index")

const lecturer_applyClassroom = () =>import("./src/applyClassroom")
const lecturer_changeTimetable = () =>import("./src/changeTimetable")
const lecturer_lecturerWorkload = () =>import("./src/lecturerWorkload")

let routes=[
    // {meta:{
    //         require_lecturer_admin:true    //需要权限
    //
    //     }},
    {
        path: "/lecturer_admin_index",
        name: "lecturer_admin_index",
        component: lecturer_admin_index,
        meta:{
            require_lecturer_admin:true    //需要权限
        },
        children:[
            {
                path: "/lecturer_admin",
                name: "lecturer_admin",
                component: lecturer_admin,
                meta:{
                    require_lecturer_admin:true    //需要权限
                }
            },
            {
                path: "/lecturer_applyClassroom",
                name: "lecturer_applyClassroom",
                component: lecturer_applyClassroom,
                meta:{
                    require_lecturer_admin:true    //需要权限
                }
            },
            {
                path: "/lecturer_changeTimetable",
                name: "lecturer_changeTimetable",
                component: lecturer_changeTimetable,
                meta:{
                    require_lecturer_admin:true    //需要权限
                }
            },
            {
                path: "/lecturer_lecturerWorkload",
                name: "lecturer_lecturerWorkload",
                component: lecturer_lecturerWorkload,
                meta:{
                    require_lecturer_admin:true    //需要权限
                }
            },
        ]
    },

];



export default routes;