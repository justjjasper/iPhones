<template>
  <!-- Mobile DropDownList -->
  <section class="general-content-list-container sm:border-0 border-2 border-black rounded-lg mt-5 flex flex-col"
  @click="handleToggleDropDownList">
    <div class="flex items-center justify-between w-full mt-5 pb-5 sm:hidden px-8 cursor-pointer relative"
    :class="{ 'divider': dropDownList }">
      <span class="font-bold text-2xl">iPhone Models</span>
      <svg v-if="!dropDownList" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>
      <svg v-if="dropDownList" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
    </div>

    <!-- General Content List -->
    <div class="general-content-list-container overflow-scroll border-0 sm:border-2 border-black p-6 h-[45vh] rounded-lg sm:block"
    :class="{ 'flex': dropDownList, 'hidden': !dropDownList }"
     >
      <ul class="general-content-list">
        <li v-for="model, index in iPhoneModels" :key="index" class="flex flex-col items-center cursor-pointer" @click="handleSelectModel(index)">
          <img class="h-auto w-[190px] transition-transform ease-in-out duration-300 hover:scale-110 transform py-3"
            :src="model.image"
            :alt="`Image of ${model.name}`"
            />
          <span class="text-lg">{{ model.name }}</span>
        </li>
      </ul>
    </div>
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
    dropDownList: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleSelectModel(index: number) {
      this.$emit('selectModel', index);
      this.handleToggleDropDownList()
    },
    handleToggleDropDownList() {
      this.$emit('toggleDropDownList')
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

.divider::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: 0;
  left: 0;
  border-radius: 12px;
  background-color: black;
}
</style>
