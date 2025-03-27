<!-- 
    User: Sid van Eijndhoven
    Date: 27-3-2025
    File: Footer.vue
  -->
<template>
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-6">
        <div class="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 HouseMarket. All Rights Reserved.</p>
          <div class="space-x-6 mt-4" @click="showError()">
            <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" class="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
</template>

<style scoped>
    Footer 
    {
        margin-top: 100px;
    }

</style>

<script setup>
import { useToast } from "vue-toastification";

// pop-up message
const toast = useToast();

const showError = () => {
  toast.error("👷‍♂️ We're sorry, but we do not exist 🚧");
};
</script>
  