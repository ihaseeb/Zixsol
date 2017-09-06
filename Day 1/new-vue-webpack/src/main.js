import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Users from './Users.vue';
import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/users/:teamId', component: Users },
    { path: '/', component: Home }
];

const router = new VueRouter({
    routes: routes, //can also just put routes and it will work
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});