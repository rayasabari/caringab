<template>
  <section
    class="fixed top-0 left-0 right-0 z-50 w-full transition duration-300 bg-white bg-opacity-60 shadow-sms backdrop-blur-lg"
  >
      <div class="flex items-center justify-between w-full px-5 py-4 md:py-4">
        <div class="flex items-center justify-between w-full lg:w-auto">
          <!-- Brand Logo -->
          <NuxtLink
            exact
            to="/"
            exact-active-class="text-exact-active"
            class="flex items-center text-2xl font-bold tracking-wider uppercase"
          ></NuxtLink>

          <!-- Toggle Menu -->
          <div class="flex items-center lg:hidden">
            <button class="focus:outline-none focus:ring-0" type="button" @click="isOpen = !isOpen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  v-if="isOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <NavDesktop :menus="menus" />
      </div>

    <!-- Mobile Navigation -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInUp animate__faster"
      leave-active-class="animate__animated animate__slideOutDown animate__faster"
    >
      <NavMobile v-if="isOpen" :menus="menus" />
    </transition>
  </section>
</template>

<script>
import listMenu from "../services/data/listMenu";
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      brand: "Benefico",
      menus: listMenu,
    };
  },
  mounted() {
    this.$root.$on("hideMenu", () => {
      this.isOpen = false;
    });
  },
  methods: {},
};
</script>

<style>
</style>