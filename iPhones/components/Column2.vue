<!-- Limitations Column -->
<template>
  <section class="column2 flex flex-col h-[65vh] rounded-lg pt-6 pb-3 overflow-scroll bg-white shadow-lg">
    <!-- Title -->
    <span class="column2-title self-center border-[1px] px-10 py-4 uppercase font-bold rounded-full border-[#666666] bg-[#f4f4f4] mb-6 text-sm md:text-base">
      Limitations
    </span>
    <!-- Mapped out Limitation Details -->
    <ul class="flex flex-col">
      <li v-for="con, index in cons" :key="index" class="px-6 py-4"
      :class="{ 'bg-white': index % 2 !== 0, 'bg-gray-100': index % 2 === 0 }">
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