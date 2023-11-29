<template>
  <div>
    <Header />
    <main class="px-20 main-content">
      <GeneralContentList :iPhoneModels="iPhoneModels" />
      <Column1 />
      <Column2 />
    </main>
  </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue'
import GeneralContentList from './components/GeneralContentList.vue'
import Column1 from './components/Column1.vue'
import Column2 from './components/Column2.vue'
import { iPhoneModels } from './iPhoneModels'

export default {
  components: {
    Header,
    GeneralContentList,
    Column1,
    Column2
  },

  data() {
    return {
      iPhoneModels
    };
  }
};
</script>

<style scoped>
.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem
}
</style>