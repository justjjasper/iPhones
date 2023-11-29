<template>
  <section class="general-content-list-container sm:hidden border-2 rounded flex items-center my-5 justify-between px-8">
      <span class="">iPhone Models</span>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
      </svg>
  </section>
  <section class="general-content-list-container border-2 border-black p-6 h-[45vh] rounded-lg overflow-scroll mt-5 hidden sm:block">
    <ul class="general-content-list overflow-scroll">
      <li v-for="model, index in iPhoneModels" :key="index" class="flex flex-col items-center cursor-pointer" @click="selectModel(index)">
        <img class="h-auto h-max-[200px] w-[190px] transition-transform ease-in-out duration-300 hover:scale-110 transform py-3"
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
    },
  },
  methods: {
    selectModel(index: number) {
      this.$emit('selectModel', index);
    }
  }
}
</script>

<style scoped>

@media (min-width: 640px) {
  .general-content-list-container {
    grid-column: 1/span 2
       /* Same as
   grid-column-start: 1;
   grid-column-end: span 2;
   */
  }
}
@media (min-width: 1280px) {
  .general-content-list-container {
    grid-column: 1/span 3
  }
}

.general-content-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem
}

</style>