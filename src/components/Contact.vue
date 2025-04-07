<!-- 
    User: Sid van Eijndhoven
    Date: 27-3-2025
    File: Contact.vue
  -->
<template>
  <div class="isolate bg-white flex flex-col min-h-screen">
    <Nav class="absolute top-0 left-0 w-full z-10"></Nav>
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    </div>
    <!-- Team -->
    <div class="bg-white py-24 sm:py-32 flex-grow mt-25" id="teamAni">
      <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3 bg-gray-200 rounded p-10">
        <div class="max-w-xl">
          <h2 class="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p class="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </div>
        <!-- Loops the persons in a list. And displays them on screen -->
        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" id="teamImg">
          <li v-for="person in people" :key="person.name">
            <div class="flex items-center gap-x-6">
              <img class="size-16 rounded-full" id="teamImg" :src="person.imageUrl" alt="" />
              <div>
                <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">{{ person.name }}</h3>
                <p class="text-sm/6 font-semibold text-indigo-600 hover:text-blue">{{ person.role }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Contact -->
     <div class="bg-gray-200 pb-24 rounded">
          <div class="mx-auto max-w-2xl text-center mt-24">
          <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2> 
          <p class="mt-2 text-lg/8 text-gray-800">Get in contact with us!</p>
        </div>
        <!-- Add Form tag for functionalty -->
        <!-- Form -->
        <div class="border-1 p-5 rounded-lg mx-auto mt-16 max-w-xl sm:mt-20 bg-white" ref="contactForm">
          <img id="rating" src="../assets/media/logo.png" alt="House" class="w-55 h-46 object-cover m-auto p-0" style="margin-bottom: 50px;" />
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
              <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <div class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select id="country" name="country" autocomplete="country" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                  </div>
                  <input type="text" name="phone-number" id="phone-number" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="123-456-7890" />
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
              </div>
            </div>
            <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
              <div class="flex h-6 items-center">
                <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                  <span class="sr-only">Agree to policies</span>
                  <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'size-4 transform rounded-full bg-white ring-1 shadow-xs ring-blue-900/5 transition duration-200 ease-in-out']" />
                </Switch>
              </div>
              <SwitchLabel class="text-sm/6 text-gray-600">
                By selecting this, you agree to our
                {{ ' ' }}
                <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
              </SwitchLabel>
            </SwitchGroup>
          </div>
          <div class="mt-10">
            <button @click="showSuccess()" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
          </div>
        </div>
     </div>
     <!-- Find us Section -->
       <section class="bg-white py-16">

       </section>



    <Footer class="mt-auto"></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import { onMounted } from "vue";
import { animate } from "motion";
import { useIntersectionObserver } from "@vueuse/core";
import { useToast } from "vue-toastification";

const toast = useToast();

const showSuccess = () => {
  toast.success("✅ Submitted! We'll be in touch soon.");
};


// maakt een ref aan voor de animiatie 
const contactForm = ref(null); 

// om de animatie te laten zien
useIntersectionObserver(contactForm, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(contactForm.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1.5, easing: "ease-out" });
  }
});


onMounted(() => {
  setTimeout(() => {
    animate("#teamAni", { y: [-600, 0], duration: 2, easing: "ease-in-out" });
  }, 500);

  setTimeout(() => {
    animate("#teamImg", { x: [600, 0], duration: 2, easing: "ease-in-out" });
  }, 1000);

});

// array met de teamleden
const agreed = ref(false)

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Eleanor Pena',
    role: 'Software Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Cameron Williamson',
    role: 'Product Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Jenny Wilson',
    role: 'UI/UX Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Darlene Robertson',
    role: 'Marketing Lead',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Guy Hawkins',
    role: 'Data Scientist',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

console.log(people)
</script>