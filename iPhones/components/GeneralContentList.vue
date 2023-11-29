<template>
  <section class="general-content-list border-2 border-black p-6 h-[50vh] rounded-lg overflow-scroll mt-5">
    <ul class="product-list">
      <li v-for="model in iPhoneModels" :key="model.name" class="flex flex-col items-center">
        <img className="h-[200px] w-[190px] transition-transform ease-in-out duration-300 hover:scale-110 transform py-3"
          :src="model.image"
          :alt="`Image of ${model.name}`"
          />
        <span class="text-lg">{{ model.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import {type iPhoneModelType} from '../types'

export default {
  props: {
    iPhoneModels: {
      type: Array as () => iPhoneModelType[],
      required: true
    }
  }
}
</script>

<style scoped>
.general-content-list {
  grid-column: 1/span 2;
    /* Same as
   grid-column-start: 1;
   grid-column-end: span 2;
   */
}
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem
}
</style>