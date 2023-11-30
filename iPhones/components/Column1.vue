<!--Specifications Column-->
<template>
  <section class="column1 flex flex-col h-[65vh] rounded-lg pt-6 pb-3 overflow-scroll bg-white shadow-lg">
    <!--Title-->
    <span class="column1-title self-center border-[1px] px-10 py-4 uppercase font-bold rounded-full border-[#666666] bg-[#f4f4f4] mb-6 text-sm md:text-base">
      Specifications
    </span>

    <!--Conditional Model Name-->
    <div class="column1-list flex flex-col">
      <span class="column1-detail-container-name px-6 py-4">
        <span class="column1-type">• Model: </span>
        <span class="column1-detail">{{ name }}</span>
      </span>

      <!--Mapped out Details, utilized index to manipulate bg-color CSS-->
      <span v-for="({ key, value }, index) in filteredDetails" :key="index" class="column1-detail-container px-6 py-4"
      :class="{'even-detail': index % 2 === 0, 'odd-detail': index % 2 !==0}">
        <span class="column1-type capitalize">• {{ key }}: </span>
        <span class="column1-detail">{{ value }}</span>
      </span>

      <!--Mapped out Other Details, manually mapped otherDetails to control layout more efficiently-->
      <span class="column1-other-detail-container px-6 py-4">
        <span class="column1-type">• Other Details: </span>
          <br/>
          <span class="flex flex-col pl-3">
            <span v-for="otherDetail,i in details.otherDetails" :key="i" class="py-1">
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
    },
    name: {
      type: String,
      required: true
    }
  },
  // Isolated Details Object to only get props that are NOT arrays.
  computed: {
    filteredDetails() {
      return this.getObjectEntries(this.details).filter(({ value }) => !Array.isArray(value));
    }
  },
  // Created custom getObjectEntries function since native func is disabled with Nuxt's SSR
  methods: {
    getObjectEntries(obj: Record<string, any>) {
      return Object.entries(obj).map(([key, value]) => ({ key, value }));
    },
  },
}
</script>

<style scoped>
.column1-type{
  font-weight: 800;
}

.column1-detail-container-name {
  display: none;
}

.even-detail {
    background-color: rgb(243 244 246);
  }

.odd-detail {
  background-color: white;
}

.column1-other-detail-container{
  background-color: white;
}

@media(min-width: 640px) and (max-width:1280px) {
  .column1-detail-container-name {
    display: block;
    background-color: rgb(243 244 246);
  }

  /* Responsible for manipulating background color of details depending on screen size  */
  .even-detail {
    background-color: white;
  }

  .odd-detail {
    background-color: rgb(243 244 246);
  }

  .column1-other-detail-container{
    background-color: rgb(243 244 246);
  }
}
</style>