<template>
  <div class="font-sans bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-lg py-4">
      <div class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4">
        <div class="flex items-center space-x-4">
          <img id="rating" src="./assets/media/logo.png" alt="House" class="w-25 h-16 object-cover m-0 p-0"/>
          <div class="text-2xl font-semibold text-gray-800 hover:text-blue-500" style="margin-left: 10px;">WorkCation</div>
          <input type="text" placeholder="🔍 Search..." class="px-6 py-1.5 border-2 rounded-xl bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <nav class="flex items-center space-x-4 mt-4 md:mt-0">
          <ul class="flex space-x-8 text-gray-600">
            <li><a href="#" class="hover:text-blue-600">Home</a></li>
            <li><a href="#" class="hover:text-blue-600">Properties</a></li>
            <li><a href="#" class="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>        
      <!-- Hero section -->
      <section class="relative w-full min-h-screen">
        <div class="absolute inset-x-0 top-10 text-center py-8 bg-black/50">
          <h2 class="text-4xl font-bold text-white">Welcome</h2>
          <p class="text-lg text-white">Check out our latest listings📃</p>
          <button class="mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500" id="heroButton">Check out!</button>
        </div>
        <img src="./assets/media/house5.png" alt="House" class="w-full h-screen object-cover" />
      </section>


    <!-- Featured Properties Section -->
      <section class="py-16">
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
    <footer class="bg-gray-800 text-white py-6">
      <div class="max-w-screen-xl mx-auto text-center">
        <p>&copy; 2025 HouseMarket. All Rights Reserved.</p>
        <div class="space-x-6 mt-4">
          <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" class="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
</style>
