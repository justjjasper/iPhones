<template>
  <section class="general-content-list-container border-2 border-black p-6 h-[45vh] rounded-lg overflow-scroll mt-5">
    <ul class="general-content-list">
      <li v-for="model, index in iPhoneModels" :key="index" class="flex flex-col items-center" @click="selectModel(index)">
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
  },
  methods: {
    selectModel(index: number) {
      this.$emit('selectModel', index);
    }
  }
}
</script>

<style scoped>
.general-content-list-container {
  grid-column: 1/span 3;
    /* Same as
   grid-column-start: 1;
   grid-column-end: span 2;
   */
}
.general-content-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem
}
</style>