const signIn = () => import ("./signIn.vue")
const signUp = () => import ("./signUp.vue")
const forgetPassword = () => import ("./forgetPassword.vue")

let routes=[
    {
        path:"/signIn",
        name:"signIn",
        component:signIn
    },{ path: '/', redirect: '/signIn' },
    {
        path:"/signUp",
        name:"signUp",
        component:signUp
    },
    {
        path:"/forgetPassword",
        name:"forgetPassword",
        component:forgetPassword
    }
]
export default routes;
