import { createRouter, createWebHistory } from 'vue-router';
// import files
import Home from '../App.vue'
import Contact from '../components/Contact.vue'
import Properties from '../components/Properties.vue'

// routes voor navigatie
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/properties',
        name: 'Properties',
        component: Properties
    }

]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
  