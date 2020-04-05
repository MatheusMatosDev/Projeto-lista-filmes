import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);





import Home from './components/Home.vue'
import Contato from './components/Contato.vue'





export default new VueRouter ({
    mode:"history",
    routes: [
        
        
        {
            path: '/',
            name:'Home',
            component:Home
        },
        {
            path: '/Contato',
            name:'Contato',
            component:Contato
        },
        
        
        
    ]
})