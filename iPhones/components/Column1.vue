<template>
  <section class="column1 flex flex-col border-2 rounded-lg border-[#C4E494] p-6 overflow-scroll">
    <span class="self-center">Pros</span>
    <ul>
      <li v-for="detail, index in details" :key="index">
        <span>• {{ detail }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">

export default {
  props: {
    details: {
      type: Array as () => string[],
      required: true
    }
  }
}
</script>