<template>
  <div class="min-h-screen">
    <div class="flex flex-col items-center justify-center h-screen">
      <div
        class="text-6xl font-semibold md:text-7xl"
        data-aos="fade-down"
        data-aos-duration="300"
        :data-aos-delay="200"
      >
        <span class>
          Cari<span
            class="text-transparent bg-gradient-to-r from-primary-900 bg-clip-text via-primary-600 to-primary-500"
          >ngab</span>
        </span>
      </div>
      <div
        class="mt-2 text-slate-500"
        data-aos="fade"
        data-aos-duration="500"
        :data-aos-delay="300"
      >Search Engine karya anak bangsad.</div>
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
          <input type="text" class="px-12 form-pge" />
        </div>
      </div>
      <div
        class="flex items-center mt-6"
        data-aos="fade"
        data-aos-duration="300"
        :data-aos-delay="300"
      >
        <button class="btn-pge">Gass Ngab</button>
      </div>
      <div
        class="flex items-center gap-3 mt-4 text-xs"
        data-aos="fade"
        data-aos-duration="500"
        :data-aos-delay="300"
      >
        <div>Caringab nawarin versi:</div>
        <a
          href="#"
          class="font-semibold text-primary-600 hover:text-primary-500 hover:underline"
        >Jaksel</a>
        <a
          href="#"
          class="font-semibold text-primary-600 hover:text-primary-500 hover:underline"
        >Napak</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexPage",
};
</script>