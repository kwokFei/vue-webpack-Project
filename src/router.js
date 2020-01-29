import VueRouter from 'vue-router'
import home from './components/home.vue' 
import message from './components/message.vue'

let router = new VueRouter({
    routes: [
        {
            path : "/" , redirect : "/home"
        },
        {
            path : "/home" , component : home
        },
        {
            path : "/message" , component : message
        },
        {
            path : "/message" , component : message
        },
        {
            path : "/message" , component : message
        }
    ]
})


export default router
