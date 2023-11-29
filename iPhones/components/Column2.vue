<template>
  <section class="column2 flex flex-col border-2 rounded-lg border-[#E7BDBC] p-6 overflow-scroll">
    <span class="self-center">Cons</span>
    <ul>
      <li v-for="con, index in cons" :key="index">
        <span>• {{ con }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">


export default {
  props: {
    cons: {
      type: Array as () => string[],
      required: true
    }
  }
}
</script>