<template>
  <div class="flex flex-col justify-center w-11/12 gap-3 mt-4 md:w-3/6">
    <div
      v-for="(item) in result"
      :key="item.pageID"
      class="p-4 transition-all duration-300 border shadow-md hover:shadow-lg hover:-translate-y-1 rounded-xl border-slate-100"
    >
      <a
        :href="`https://id.wikipedia.org/wiki/${item.title}`"
        target="_blank"
        class="font-semibold transition-all duration-300 cursor-pointer hover:underline hover:text-primary-500 text-primary-600"
      >{{item.title}}</a>
      <div v-html="item.snippet" class="mt-1 text-xs text-slate-500"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: {
    result: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>