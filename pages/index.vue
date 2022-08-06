<template>
  <div class="min-h-screen">
    <div class="flex flex-col items-center justify-center pt-[30vh]">
      <Hero />
      <form @submit.prevent="cariNgab" class="w-full">
        <SearchForm @on-input="(word) => keyword = word " :loadingButton="loadingButton" />
      </form>
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <Results v-if="result.length > 0" :result="result" />
      </transition>
      <Error v-if="error" />
      <Fitur />
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  components: { Button },
  name: "IndexPage",
  data() {
    return {
      loadingButton: false,
      keyword: "",
      result: [],
      error: false,
    };
  },
  methods: {
    cariNgab() {
      this.loadingButton = true;
      setTimeout(() => {
        this.loadingButton = false;
        this.fetchData();
      }, 300);
    },
    fetchData() {
      this.$axios
        .get(
          `https://id.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${this.keyword}`
        )
        .then((response) => {
          this.result = response.data.query.search;
          if (response.data.query.search.length > 0) {
            this.error = false;
          } else {
            this.error = true;
          }
        })
        .catch((error) => {
          this.error = true;
          this.result = [];
        });
    },
  },
};
</script>