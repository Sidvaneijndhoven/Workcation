<!-- 
  User: Sid van Eijndhoven
  Date: 26-3-2025
  File: Properties.vue
-->
<template>  
 <div class="isolate bg-white flex flex-col min-h-screen">
    <Nav class="absolute top-0 left-0 w-full z-10"></Nav>
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    </div>
    <!-- CTA -->
    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-50 mb-50">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          Find your dream home today at WorkCation!
        </h2>
        <p class="hidden text-gray-500 md:mt-4 md:block">
          Workcation is a house listing website that helps users find their ideal vacation homes, whether for short-term getaways or extended stays. The platform features a variety of properties, from beachfront villas to cozy countryside cabins, catering to travelers looking for both relaxation and productivity.
        </p>
  
        <div class="mt-4 md:mt-8" id="startedButton" @click="showError()">
          <a
            href="#"
            class="inline-block rounded-sm bg-blue-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div> 
    <img
      alt=""
      src="../assets/media/Prop.png"
      class="h-56 w-full object-cover sm:h-full "
      ref="propertieImg"   
    />
  </section>
    <!-- Listings -->
    <section class="mt-20">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Properties</h2>
  
        <p class="mt-4 max-w-md text-gray-500">
          Current listings📃
        </p>
      </header>
      <div class="mt-8 block lg:hidden">
        <button
          class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
        >
          <span class="text-sm font-medium"> Filters & Sorting </span>
          <!-- icon with icon api -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 rtl:rotate-180"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
        <div class="hidden space-y-4 lg:block">
          <div>
            <label for="SortBy" class="block text-xs font-medium text-gray-700"> Sort By </label>
            <!-- Sort by filter -->
            <select id="SortBy" class="mt-1 rounded-sm border-gray-300 text-sm">
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>
          <!-- Filters -->
          <div id="Filters" ref="filterAnimation">
            <p class="block text-xs font-medium text-gray-700">Filters</p>
            <div class="mt-1 space-y-2">
              <details
                class="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
              <!-- Filter 1 -->
               <!-- Make a responsive div -->
                <!-- Set them in a responsive detail -->
                 <!-- Set them in a summary -->
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span class="text-sm font-medium"> Location </span>
                  <span class="transition group-open:-rotate-180">
                     <!-- icon with icon api -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div class="border-t border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700"> 0 Selected </span>
                    <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>
                  <ul class="space-y-1 border-t border-gray-200 p-4" ref="filterSelection">
                    <li>
                      <!-- Checkbox -->
                      <label for="FilterInStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />
                        <span class="text-sm font-medium text-gray-700"> City </span>
                      </label>
                    </li>
                    <li>
                      <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />
                        <span class="text-sm font-medium text-gray-700"> Neighborhood/Area </span>
                      </label>
                    </li>
                    <li>
                      <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />
                        <span class="text-sm font-medium text-gray-700"> Small City </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </details>
              <!-- End of first filter -->
              <!-- Filter 2 -->
              <details
                class="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span class="text-sm font-medium"> Price </span>
                  <span class="transition group-open:-rotate-180">
                     <!-- icon with icon api -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div class="border-t border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700"> Select you're Budget </span>
                    <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>
                  <div class="border-t border-gray-200 p-4" ref="filterSelection2">
                    <div class="flex justify-between gap-4">
                      <label for="FilterPriceFrom" class="flex items-center gap-2">
                        <span class="text-sm text-gray-600">$</span>
                        <input
                          type="number"
                          id="FilterPriceFrom"
                          placeholder="From"
                          class="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                        />
                      </label>
                      <label for="FilterPriceTo" class="flex items-center gap-2">
                        <span class="text-sm text-gray-600">$</span>
                        <input
                          type="number"
                          id="FilterPriceTo"
                          placeholder="To"
                          class="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </details>
              <!-- End of filter 2 -->
               <!-- Filter 3-->
              <details
                class="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                >
                  <span class="text-sm font-medium"> Style </span>
                  <span class="transition group-open:-rotate-180">
                     <!-- icon with icon api -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <ul class="space-y-1 border-t border-gray-200 p-4" ref="filterSelection3">
                    <li>
                      <!-- Checkbox style -->
                      <label for="FilterInStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />
                        <span class="text-sm font-medium text-gray-700"> Modern</span>
                      </label>
                    </li>
  
                    <li>
                      <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />
                        <span class="text-sm font-medium text-gray-700"> Retro </span>
                      </label>
                    </li>
                    <li>
                      <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />
                        <span class="text-sm font-medium text-gray-700"> Appertments </span>
                      </label>
                    </li>
                  </ul>
                <div class="border-t border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700"> 0 Selected </span>
                    <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                      Reset
                    </button>
                  </header>
                </div>
              </details>
              <!-- End of filter 3 -->
            </div>
          </div>
        </div>
        <!-- Properties img -->
        <div class="lg:col-span-3">
          <!-- House 1 -->
          <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li ref="house1">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house1.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
                    <span class="tracking-wider text-gray-900"> €250.100 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 2 -->
            <li ref="house2">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house2.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Family Home
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
  
                    <span class="tracking-wider text-gray-900"> €520.320 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 3 -->
            <li ref="house3">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house3.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Wood
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Modern Wood </span>
                    <span class="tracking-wider text-gray-900"> €820.020 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 4 -->
            <li ref="house4">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house4.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Family Home
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span> 
                    <span class="tracking-wider text-gray-900"> €720.320 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- Home 5 -->
            <li ref="house5">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house5.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />  
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Villa
                  </h3>  
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>  
                    <span class="tracking-wider text-gray-900"> €1.520.320 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 6 -->
            <li ref="house6">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house6.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                /> 
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Classic Modern
                  </h3> 
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span> 
                    <span class="tracking-wider text-gray-900"> €910.620 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 7 -->
            <li ref="house7">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house1.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />  
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern
                  </h3> 
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span> 
                    <span class="tracking-wider text-gray-900"> €250.100 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 8 -->
            <li ref="house8">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house2.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                /> 
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Family Home
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
                    <span class="tracking-wider text-gray-900"> €520.320 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 9 -->
            <li ref="house9">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house3.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Wood
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Modern Wood </span>
                    <span class="tracking-wider text-gray-900"> €820.020 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 10 -->
            <li ref="house10">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house4.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Family Home
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
  
                    <span class="tracking-wider text-gray-900"> €720.320 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- Home 11 -->
            <li ref="house11">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house5.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                /> 
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Modern Villa
                  </h3> 
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
                    <span class="tracking-wider text-gray-900"> €1.520.320 </span>
                  </p>
                </div>
              </a>
            </li>
            <!-- House 12 -->
            <li ref="house12">
              <a href="#" class="group block overflow-hidden">
                <img
                  src="../assets/media/house6.png"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div class="relative bg-white pt-3">
                  <h3
                    class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    Classic Modern
                  </h3>
                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>
                    <span class="tracking-wider text-gray-900"> €910.620 </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
  </div>
</template>
<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
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
const propertieImg = ref(null);
const house1 = ref(null);
const house2 = ref(null);
const house3 = ref(null);
const house4 = ref(null);
const house5 = ref(null);
const house6 = ref(null);
const house7 = ref(null);
const house8 = ref(null);
const house9 = ref(null);
const house10 = ref(null);
const house11 = ref(null);
const house12 = ref(null);
const filterAnimation = ref(null);
const filterSelection = ref(null);
const filterSelection2 = ref(null);
const filterSelection3 = ref(null);


 
// om de animatie te laten zien
// maakt een loop aan voor de animatie
for (let i = 1; i <= 12; i++) {
  useIntersectionObserver(eval(`house${i}`), ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animate(eval(`house${i}`).value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
    }
  });
}

useIntersectionObserver(propertieImg, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(propertieImg.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.5, easing: "ease-out" });
  }
});

useIntersectionObserver(filterAnimation, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(filterAnimation.value, { 
      opacity: [0, 1], 
      scale: [0.8, 1], 
      x: [-100, 0] 
    }, { 
      duration: 0.5, 
      easing: "ease-out" 
    });
  }
});

useIntersectionObserver(filterSelection, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(filterSelection.value, { 
      opacity: [0, 1], 
      scale: [0.8, 1], 
      x: [-100, 0] 
    }, { 
      duration: 0.5, 
      easing: "ease-out" 
    });
  }
});

useIntersectionObserver(filterSelection2, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(filterSelection2.value, { 
      opacity: [0, 1], 
      scale: [0.8, 1], 
      x: [-100, 0] 
    }, { 
      duration: 0.5, 
      easing: "ease-out" 
    });
  }
});

useIntersectionObserver(filterSelection3, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(filterSelection3.value, { 
      opacity: [0, 1], 
      scale: [0.8, 1], 
      x: [-100, 0] 
    }, { 
      duration: 0.5, 
      easing: "ease-out" 
    });
  }
});

// Animation when page loaded
onMounted(() => {
  setTimeout(() => {
    animate("#startedButton", { x: [-600, 0], duration: 2, easing: "ease-in-out" });
  }, 1000);
});


</script>