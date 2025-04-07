<!-- 
    User: Sid van Eijndhoven
    Date: 27-3-2025
    File: App.vue
  -->
<template>    
<div class="font-sans bg-gray-50">
  <router-view v-if="[ 'contact', 'properties', 'login' ].includes($route.path.replace('/', ''))"></router-view>
    <div class="render" v-else>

        <!-- Nav -->
         <Nav></Nav>
        <!-- Hero section -->
        <section class="relative w-full min-h-screen">
          <div class="absolute inset-x-0 top-10 text-center py-8 bg-black/50" id="heroText">
            <h2 class="text-4xl font-bold text-white">Welcome</h2>
            <p class="text-lg text-white">Check out our latest listings📃</p>
            <button class="mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500" id="heroButton" @click="showError()">Check out!</button>
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
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500" @click="showError()">View Details</button>
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
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500" @click="showError()">View Details</button>
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
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500" @click="showError()">View Details</button>
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
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500" @click="showError()">View Details</button>
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
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500" @click="showError()">View Details</button>
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
                <button class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500" @click="showError()">View Details</button>
              </div>
            </div>
          </div>
        </section>
        <!-- Reviews Section -->
        <section class="relative w-full min-h-screen font-semibold mt-20">
          <div class="max-w-screen-xl mx-auto text-center mb-12">
            <h2 class="text-3xl font-semibold text-gray-800">⭐Reviews⭐</h2>
            <p class="text-lg text-gray-600">We are 4.6/5🌟Rated!</p>
          </div>

          <!-- Reviews Grid -->
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-8 lg:gap-4 mb-20 px-4" ref="review">
            <!-- Review 1 -->
            <div class="rounded-lg bg-gray-200 text-center p-5 lg:col-span-3 lg:col-start-2" id="rating" >
              <div class="rating mt-5 text-2xl font-semibold text-gray-800">
                5/5🌟 Rated!
              </div>
              <br>
              <div class="userImg">
                <img src="./assets/media/reviewImg.png" alt="House" class="w-1/4 h-1/4 object-cover mx-auto" />
              </div>
              <div class="userRate">
                By: Harris van Weert
              </div>
              <div class="reviewOn border-b-2 w-1/4 mx-auto">
                2 days ago
              </div>
              <br>
              <div class="userMessage">
                <h2>Message:</h2>
                <br>
                <p class="w-3/4 m-auto">  
                  "Absolutely perfect! This house has everything we were looking for: spacious rooms, a beautiful backyard, and a quiet neighborhood. The modern kitchen is a dream, and the open layout makes it perfect for entertaining. The location is ideal, with excellent schools and parks nearby. We’re thrilled with our new home!"
                </p>
              </div>
              <button class="w-auto m-auto border-2 rounded mt-5 p-2 bg-blue-600">
                   <a href="https://www.trustpilot.com/review/homelister.com">
                    <p class="text-white text-center hover:text-black">Read more reviews ➡️</p>
                   </a>
              </button>
            </div>

            <!-- Review 2 -->
            <div class="rounded-lg bg-gray-200 text-center p-5 lg:col-span-3 lg:col-start-5" id="rating">
              <div class="rating mt-5 text-2xl font-semibold text-gray-800">
                4.5/5🌟 Rated!
              </div>
              <br>
              <div class="userImg">
                <img src="./assets/media/reviewImg2.png" alt="House" class="w-1/4 h-1/4 object-cover mx-auto" />
              </div>
              <div class="userRate">
                By: Lloyd de Laat
              </div>
              <div class="reviewOn border-b-2 w-1/4 mx-auto">
                2 Hours ago
              </div>
              <br>
              <div class="userMessage">
                <h2>Message:</h2>
                <br>
                <p class="w-3/4 m-auto">  
                  "Absolutely perfect! This house has everything we were looking for: spacious rooms, a beautiful backyard, and a quiet neighborhood. The modern kitchen is a dream, and the open layout makes it perfect for entertaining. The location is ideal, with excellent schools and parks nearby. We’re thrilled with our new home!"
                </p>
              </div>
              <button class="w-auto m-auto border-2 rounded mt-5 p-2 bg-blue-600">
                   <a href="https://www.trustpilot.com/review/homelister.com">
                    <p class="text-white text-center hover:text-black">Read more reviews ➡️</p>
                   </a>
              </button>
            </div>
            <!-- Review 3 -->
            <div class="rounded-lg bg-gray-200 text-center p-5 lg:col-span-3 lg:col-start-2 mt-10" id="rating" ref="rating2">
              <div class="rating mt-5 text-2xl font-semibold text-gray-800">
                4.2/5🌟 Rated!
              </div>
              <br>
              <div class="userImg">
                <img src="./assets/media/aImg.png" alt="House" class="w-1/4 h-1/4 object-cover mx-auto" />
              </div>
              <div class="userRate">
                By: Anne van der Meer
              </div>
              <div class="reviewOn border-b-2 w-1/4 mx-auto">
                8 Hours ago
              </div>
              <br>
              <div class="userMessage">
                <h2>Message:</h2>
                <br>
                <p class="w-3/4 m-auto">  
                  "This home is exactly what we wanted! It has large, comfortable rooms, a stunning backyard, and is located in a peaceful area. The kitchen is beautifully designed, and the open-plan space is great for hosting guests. The location is also fantastic, with top-rated schools and parks close by. We couldn’t be happier with our new place!"
                </p>
              </div>
              <button class="w-auto m-auto border-2 rounded mt-5 p-2 bg-blue-600">
                   <a href="https://www.trustpilot.com/review/homelister.com">
                    <p class="text-white text-center hover:text-black">Read more reviews ➡️</p>
                   </a>
              </button>
            </div>
            <!-- Review 4 -->
            <div class="rounded-lg bg-gray-200 text-center p-5 lg:col-span-3 lg:col-start-5 mt-10" id="rating" ref="rating">
              <div class="rating mt-5 text-2xl font-semibold text-gray-800">
                4.1/5🌟 Rated!
              </div>
              <br>
              <div class="userImg">
                <img src="./assets/media/bImg.png" alt="House" class="w-1/4 h-1/4 object-cover mx-auto" />
              </div>
              <div class="userRate">
                By: Bart van der zee
              </div>
              <div class="reviewOn border-b-2 w-1/4 mx-auto">
                 12 Hours ago
              </div>
              <br>
              <div class="userMessage">
                <h2>Message:</h2>
                <br>
                <p class="w-3/4 m-auto">
                  "We are really happy with our new home! It offers spacious rooms, a lovely backyard, and is situated in a quiet neighborhood. The kitchen is well-designed, and the open layout works perfectly for entertaining. The location is ideal, with excellent schools and parks nearby. While there are a couple of minor things we would improve, overall we’re thrilled with our choice!";  
                </p>
              </div>
              <button class="w-auto m-auto border-2 rounded mt-5 p-2 bg-blue-600">
                   <a href="https://www.trustpilot.com/review/homelister.com">
                    <p class="text-white text-center hover:text-black">Read more reviews ➡️</p>
                   </a>
              </button>
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
import { useToast } from "vue-toastification";

// pop-up message
const toast = useToast();

const showError = () => {
  toast.error("👷‍♂️ We're sorry, but this is still in development. 🚧");
};

// maakt een ref aan voor de animiatie 
const properties = ref(null); 
const review = ref(null);
const rating2 = ref(null);
const rating = ref(null);

// om de animatie te laten zien
useIntersectionObserver(properties, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(properties.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
  }
});

useIntersectionObserver(review, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(review.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
  }
});

useIntersectionObserver(rating2, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(rating2.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
  }
});

useIntersectionObserver(rating, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(rating.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
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
