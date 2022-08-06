<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="w-10/12 mt-4 md:w-2/6"
      data-aos="fade"
      data-aos-duration="300"
      :data-aos-delay="200"
    >
      <div class="relative">
        <div class="absolute inset-y-0 flex items-center left-4">
          <SearchIcon />
        </div>
        <div class="absolute inset-y-0 flex items-center right-4">
          <GridIcon />
        </div>
        <input
          type="text"
          @input="$emit('on-input', $event.target.value)"
          placeholder="ketik yang lau pengen cari ngab..."
          class="px-12 form-pge"
        />
      </div>
    </div>
    <div
      class="flex items-center mt-6"
      data-aos="fade"
      data-aos-duration="300"
      :data-aos-delay="300"
    >
      <button
        type="submit"
        :disabled="loadingButton"
        :class=" loadingButton ? 'bg-opacity-40 hover:bg-opacity-40 cursor-not-allowed' : ''"
        class="flex gap-1 transition-all duration-300 btn-pge"
      >
        <Spinner v-if="loadingButton" />
        {{ loadingButton ? 'bentar...' : 'Gass Ngab' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: ['loadingButton'],
};
</script>

<style>
</style>