<!--Cons Column-->
<template>
  <section class="column2 flex flex-col border-2 h-[65vh] rounded-lg border-[#E7BDBC] p-6 overflow-scroll">
    <span class="column2-title self-center border-[1px] px-10 py-4 uppercase font-bold rounded-full border-[#E7BDBC] bg-[#F6EFEF] mb-6 text-sm md:text-base">
      Cons
    </span>
    <ul class="flex flex-col gap-4">
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