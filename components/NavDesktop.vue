<template>
  <nav class="hidden lg:block">
    <ul class="flex items-center justify-between w-full">
      <li class="pl-4 group" v-for="menu in menus" :key="menu.name">
        <NuxtLink
          :exact="menu.link == '/' ? true : false"
          active-class="text-link-active"
          :to="menu.link"
          class="py-4 text-sm font-semibold transition duration-300"
        >{{menu.name}}</NuxtLink>
      </li>
      <li>
        <div class="pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </div>
      </li>
      <li>
        <div class="pl-4">
          <img
            class="rounded-full w-7 h-7"
            src="/rysb.jpeg"
            alt="avatar rysb"
          />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavDesktop",
  props: ["menus"],
  mounted() {
    // console.log(this.$router.currentRoute.path.split("/"));
  },
  methods: {},
};
</script>

<style>
</style>