import Vue from "vue";
import Router from "vue-router";
import signIn from "./computer/signIn/router.js"

//user
 import lecturer from "./computer/user/lecturer/router.js"
 import student from "./computer/user/student/router.js"
 import one_admin from "./computer/user/one_admin/router.js"
 import two_admin from "./computer/user/two_admin/router.js"
 import schoolTitle from  "./computer/components/schoolTitle"

Vue.use(Router);
let routes = [
    { path: '/', redirect: '/signIn' },

    {
        path: "/schoolTitle",
        name: "schoolTitle",
        component:schoolTitle,
             children:[
                ...signIn,
                ...one_admin,
                ...two_admin,
                ...student,
                ...lecturer,]
    }
];


let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes,

})
router.beforeEach((to, from, next) => {
    //console.error(store.state.userJurisdiction +"    5")
    const user =sessionStorage.getItem('user');

    if (!user ) {
        if (to.meta.require_lecturer_admin || to.name == null ||to.meta.require_two_admin ||
            to.meta.require_student_admin ||to.meta.require_one_admin) {
            console.error("/")
            next({path: '/'})
        } else {
            next()
        }
    }else if(user) {
        if (user === "student_admin") {
      if (
        to.meta.require_lecturer_admin ||
        to.meta.require_two_admin ||
        to.meta.require_one_admin){
          console.error("err")
          next({path:'/student_admin'})}

                }

        if(user==="lecturer_admin" ){
            if(to.meta.require_student_admin  ||to.meta.require_two_admin || to.meta.require_one_admin)
            {
                console.error("err")
                next({path:'/lecturer_admin'})
            }
        }

        if(user==="one_admin" ){
            if(to.meta.require_lecturer_admin  ||to.meta.require_two_admin ||
                to.meta.require_student_admin){
                console.error("err")
                next({path:'/one_admin'})
            }
        }

        if(user==="two_admin" ){
            if(to.meta.require_lecturer_admin  ||to.meta.require_student_admin ||
                to.meta.require_one_admin){
                console.error("err")
                next({path:'/two_admin'})
            }
        }
        next();
    }

})

export default router;
