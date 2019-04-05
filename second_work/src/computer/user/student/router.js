const student_admin = () =>import("./src/main")
const student_admin_index = () =>import("./index")

let routes=[
    {
        path: "/student_admin_index",
        name: "student_admin_index",
        component: student_admin_index,
        meta:{
            require_student_admin:true    //需要权限
        },
        children:[
            {
                path: "/student_admin",
                name: "student_admin",
                component: student_admin,
                meta:{
                    require_student_admin:true    //需要权限
                }
            }
        ]
    },

];



export default routes;