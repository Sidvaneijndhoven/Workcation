<template>  
      <!-- Header -->
      <header class="bg-white shadow-lg py-4">
        <div class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4">
          <div class="flex items-center space-x-4">
            <img id="rating" src="../assets/media/logo.png" alt="House" class="w-25 h-16 object-cover m-0 p-0"/>
            <div class="text-2xl font-semibold text-gray-800 hover:text-blue-500" style="margin-left: 10px;">WorkCation</div>
            <input type="text" placeholder="🔍 Search..." class="px-12 py-1.5 border-2 rounded-xl bg-white-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <nav class="flex items-center space-x-4 mt-4 md:mt-0">
            <ul class="flex space-x-8 text-gray-600">
                <router-link to="/home">
                    <li><a class="hover:text-blue-600">Home</a></li>
                </router-link>
                <router-link to="/properties">
                    <li><a class="hover:text-blue-600">Properties</a></li>
                </router-link>
              <router-link to="/contact">
                    <li><a class="hover:text-blue-600 hover:cursor-pointer">Contact</a></li>
              </router-link>
            </ul>
          </nav>
        </div>
      </header>  
</template>