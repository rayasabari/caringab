<template>
  <div class="relative">
    <NavBar></NavBar>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<script>

export default {
  name: "DefaultLayout",
  head: {
    htmlAttrs: {
      class: "scroll-smooth",
    },
    bodyAttrs: {
      class: "font-poppins text-slate-600",
    },
  },
  mounted() {
    this.setViewHeight();
    window.addEventListener("resize", () => {
      this.setViewHeight();
    });
  },
  methods: {
    setViewHeight: function () {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
};
</script>
