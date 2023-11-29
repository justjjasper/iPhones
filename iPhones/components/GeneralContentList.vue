<template>
  <div class="general-content-list border-2 border-black p-6 overflow-scroll">
    <ul>
      <li v-for="model in iPhoneModels" :key="model.name"> {{ model.name }}</li>
    </ul>
  </div>
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