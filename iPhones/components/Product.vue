<template>
  <section class="column2 flex-col rounded-lg h-[65vh] p-6 overflow-scroll hidden xl:border-2 xl:flex">
    <span class="flex flex-col items-center">
      <span class="text-3xl font-bold">{{ name }}</span>
      <img :src="image" class="min-h-[200px]"/>
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