import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/the_member.vue'
import shoppoing_car from './components/tabbar/shoppoing_car.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/news/NewsList.vue'
import newinfo from './components/news/NewInfo.vue';

let router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: home,
        },
        {
            path: "/member",
            component: member
        },
        {
            path: "/shoppoing_car",
            component: shoppoing_car
        },
        {
            path: "/search",
            component: search
        },

        {
            path: "/home/newlist",
            component: newlist,
        },
        {
            path: "/home/newinfo/:id",
            component: newinfo,
        }

    ],

})


export default router