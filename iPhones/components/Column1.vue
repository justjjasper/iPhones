<template>
  <section class="column1 flex flex-col border-2 h-[65vh] rounded-lg border-[#C4E494] p-6 overflow-scroll">
    <span class="column1-title self-center border-[1px] px-10 py-4 uppercase font-bold rounded-full border-[#C4E494] bg-[#EEF9DF] mb-6">
      Specifications
    </span>

    <div class="column1-list flex flex-col gap-4">
      <span class="column1-detail-container">
        <span class="column1-type">• Camera: </span>
        <span class="column1-detail">{{ details.camera }}</span>
      </span>

      <span class="column1-detail-container">
        <span class="column1-type">• RAM: </span>
        <span class="column1-detail">{{ details.RAM }}</span>
      </span>

      <span class="column1-detail-container">
        <span class="column1-type">• Storage: </span>
        <span class="column1-detail">{{ details.storage }}</span>
      </span>

      <span class="column1-detail-container">
        <span class="column1-type">• Battery: </span>
        <span class="column1-detail">{{ details.battery }}</span>
      </span>

      <span class="column1-detail-container">
        <span class="column1-type">• Processor: </span>
        <span class="column1-detail">{{ details.processor }}</span>
      </span>

      <span class="column1-detail-container">
        <span class="column1-type">• Other Details: </span>
          <br/>
          <span class="flex flex-col pl-3">

            <span v-for="otherDetail,i in details.otherDetails" :key="i">
              • {{ otherDetail }}
            </span>
          </span>
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import  { type DetailType } from '~/types'

export default {
  props: {
    details: {
      type: Object as PropType<DetailType>,
      required: true
    }
  }
}
</script>

<style scoped>
.column1-type{
  font-weight: 800;
}
</style>