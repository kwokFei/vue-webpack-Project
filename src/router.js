import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue' 
import member from './components/tabbar/the_member.vue'
import shoppoing_car from './components/tabbar/shoppoing_car.vue'
import search from './components/tabbar/search.vue'

let router = new VueRouter({
    routes: [
        {
            path : "/" , redirect : "/home"
        },
        {
            path : "/home" , component : home
        },
        {
            path : "/member" , component : member
        },
        {
            path : "/shoppoing_car" , component : shoppoing_car
        },
        {
            path : "/search" , component : search
        },
    ],
    linkActiveClass: 'mui-active' 
   
})


export default router
