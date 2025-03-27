<!-- 
    User: Sid van Eijndhoven
    Date: 27-3-2025
    File: Login.vue
    Description: Login file needs grid fixed
  -->
<template>
    <div class="isolate bg-white flex flex-col min-h-screen">
        <Nav class="absolute top-0 left-0 w-full z-10"></Nav>
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true"></div>
        <!-- Main Content -->
        <div class="flex-1 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-20">
            <div class="h-32 rounded bg-gray-300">
                <img id="rating" src="../assets/media/house2.png" alt="House" class="w-full h-150 object-cover m-auto p-0 mb-20" />
            </div>
            <div class="h-32 rounded bg-gray-300">
                <div class="border-1 p-5 rounded-lg mx-auto mt-106 max-w-xl sm:mt-20 bg-white">
                    <img id="rating" src="../assets/media/login.png" alt="House" class="w-55 h-46 object-cover m-auto p-0 mb-20" />
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <!-- First Name label -->
                        <div>
                            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
                            <div class="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                            </div>
                        </div>
                        <!-- Last Name label -->
                        <div>
                            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
                            <div class="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                            </div>
                        </div>
                        <!-- Password label -->
                        <div class="sm:col-span-2">
                            <label for="password" class="block text-sm/6 font-semibold text-gray-900">Password</label>
                            <div class="mt-2.5">
                                <input type="password" name="password" id="password" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                            </div>
                        </div>
                        <!-- Email label -->
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
                            <div class="mt-2.5">
                                <input type="text" name="email" id="email" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                            </div>
                        </div>
                        <div>
                            <button class="font-semibold block text-center mx-auto bg-orange-400 px-20 py-2 border-0 rounded hover:bg-blue-400">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer class="absolute bottom-[-420px] w-full"></Footer>
    </div>
</template>

<script setup>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
</script>