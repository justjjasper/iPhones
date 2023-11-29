<template>
  <div>
    <Header />
    <main>
      <GeneralContentList />
      <Column1 />
      <Column2 />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import GeneralContentList from './components/GeneralContentList.vue'
import Column1 from './components/Column1.vue'
import Column2 from './components/Column2.vue'

export default {
  components: {
    Header,
    GeneralContentList,
    Column1,
    Column2
  },

  data() {
    return {
      appData: {

      }
    };
  }
};
</script>