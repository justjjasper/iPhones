<template>
  <section class="column2 flex flex-col border-2 rounded-lg border-black p-6 overflow-scroll">
    <span class="flex flex-col items-center">
      <span class="text-3xl font-bold">{{ name }}</span>
      <img :src="image"/>
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