// User: Sid van Eijndhoven
// File: Index.js
// Date: 27-3-2025
// Description: Router file for navigation
import { createRouter, createWebHistory } from 'vue-router';
// import files
import Home from '../App.vue'
import Contact from '../components/Contact.vue'
import Properties from '../components/Properties.vue'
import Login from '../components/Login.vue'

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
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }

]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
  