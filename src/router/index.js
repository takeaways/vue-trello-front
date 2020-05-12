import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Board from "../components/Board";


Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/b/:bid', component: Board },
        { path: '*', component: NotFound }
    ]
})

export default router

