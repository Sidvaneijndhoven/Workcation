<!-- User: Sid van Eijndhoven -->
<template>    
<div class="font-sans bg-gray-50">
  <router-view v-if="[ 'contact', 'properties' ].includes($route.path.replace('/', ''))"></router-view>
    <div class="render" v-else>

        <!-- Nav -->
         <Nav></Nav>
        <!-- Hero section -->
        <section class="relative w-full min-h-screen">
          <div class="absolute inset-x-0 top-10 text-center py-8 bg-black/50" id="heroText">
            <h2 class="text-4xl font-bold text-white">Welcome</h2>
            <p class="text-lg text-white">Check out our latest listings📃</p>
            <button class="mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500" id="heroButton">Check out!</button>
          </div>
          <img src="./assets/media/house5.png" alt="House" class="w-full h-screen object-cover" />
        </section>

      <!-- Featured Properties Section -->
        <section class="py-16" ref="properties">
          <div class="max-w-screen-xl mx-auto text-center mb-12">
            <h2 class="text-3xl font-semibold text-gray-800">Featured Properties</h2>
            <p class="text-lg text-gray-600">Los Angeles - Live like the stars⭐</p>
          </div>

          <!-- House Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 justify-center">
            
            <!-- House 1 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" id="houses">
              <img src="./assets/media/house1.png" alt="House" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">Modern Family Home</h3>
                <p class="text-gray-600">3 Beds, 2 Baths</p>
                <p class="text-xl font-semibold text-gray-800 mt-2">$455,000</p>
                <img id="rating" src="./assets/media/rating.png" alt="House" class="w-25 h-16 object-cover" />
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">View Details</button>
              </div>
            </div>

            <!-- House 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" id="houses">
              <img src="./assets/media/house2.png" alt="House" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">Luxury Apartment</h3>
                <p class="text-gray-600">2 Beds, 2 Baths</p>
                <p class="text-xl font-semibold text-gray-800 mt-2">$520,000</p>
                <img id="rating" src="./assets/media/rating.png" alt="House" class="w-25 h-16 object-cover" />
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">View Details</button>
              </div>
            </div>
            
            <!-- House 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" id="houses">
              <img src="./assets/media/house3.png" alt="House" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">Modern Family Home</h3>
                <p class="text-gray-600">3 Beds, 2 Baths</p>
                <p class="text-xl font-semibold text-gray-800 mt-2">$465,000</p>
                <img id="rating" src="./assets/media/rating.png" alt="House" class="w-25 h-16 object-cover" />
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">View Details</button>
              </div>
            </div>
            
            <!-- House 4 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" id="houses">
              <img src="./assets/media/house4.png" alt="House" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">Modern Family Home</h3>
                <p class="text-gray-600">5 Beds, 1 Bath</p>
                <p class="text-xl font-semibold text-gray-800 mt-2">$350,000</p>
                <img id="rating" src="./assets/media/rating.png" alt="House" class="w-25 h-16 object-cover" />
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">View Details</button>
              </div>
            </div>

            <!-- House 5 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" id="houses">
              <img src="./assets/media/house5.png" alt="House" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">Modern Classic Home</h3>
                <p class="text-gray-600">5 Beds, 2 Baths</p>
                <p class="text-xl font-semibold text-gray-800 mt-2">$430,000</p>
                <img id="rating" src="./assets/media/rating.png" alt="House" class="w-25 h-16 object-cover" />
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">View Details</button>
              </div>
            </div>

            <!-- House 6 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden" id="houses">
              <img src="./assets/media/house6.png" alt="House" class="w-full h-56 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">Luxury Apartment</h3>
                <p class="text-gray-600">2 Beds, 2 Baths</p>
                <p class="text-xl font-semibold text-gray-800 mt-2">$420,000</p>
                <img id="rating" src="./assets/media/rating.png" alt="House" class="w-25 h-16 object-cover" />
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">View Details</button>
              </div>
            </div>
          </div>
        </section>
        <!-- Footer -->
         <Footer></Footer>
    </div>  
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import { onMounted, ref } from "vue";
import { animate } from "motion";
import { useIntersectionObserver } from "@vueuse/core";

// maakt een ref aan voor de animiatie 
const properties = ref(null); 

// om de animatie te laten zien
useIntersectionObserver(properties, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(properties.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
  }
});

onMounted(() => {
  setTimeout(() => {
    animate("#heroText", { x: [-600, 0], duration: 2, easing: "ease-in-out" });
  }, 500);

  setTimeout(() => {
    animate("#heroButton", { x: [600, 0], duration: 2, easing: "ease-in-out" });
  }, 1100);


});

</script>

<style scoped>
</style>
