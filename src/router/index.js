import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Board from "../components/Board";
import Card from "../components/Card";


Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
    const isAuth = localStorage.getItem('token');
    const loginPaths = `/login?Path=${encodeURIComponent(to.path)}`;
    isAuth ? next() : next(loginPaths);
}


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home, beforeEnter: requireAuth },
        { path: '/login', component: Login, },
        { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [{ path: 'c/:cid', component: Card }, beforeEnter: requireAuth] },
        { path: '*', component: NotFound }
    ]
})

export default router

