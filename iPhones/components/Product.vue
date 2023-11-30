<!-- Product Image Column, only appears during mobile layout and screens larger than 680px width-->
<template>
  <section class="product-container flex flex-col rounded-lg h-[65vh] p-6 sm:overflow-scroll sm:hidden xl:flex bg-white shadow-lg">
    <span class="flex flex-col items-center">
      <span class="text-3xl font-bold">{{ name }}</span>
      <img :src="image" class="h-[200px] sm:h-[250px]"/>
    </span>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>