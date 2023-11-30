<template>
  <div>
    <Header />
    <main id='app' class="px-5 lg:px-20 main-content bg-gray-50 py-5 ">
      <GeneralContentList :iPhoneModels="iPhoneModels" @selectModel="selectModel" :dropDownList="dropDownList" @toggleDropDownList="toggleDropDownList" :selectedModel="selectedModel"/>
      <Column1 :details="iPhoneModels[selectedModel].details" :name="iPhoneModels[selectedModel].name"/>
      <Product :name="iPhoneModels[selectedModel].name" :image="iPhoneModels[selectedModel].image"/>
      <Column2 :cons="iPhoneModels[selectedModel].cons"/>
    </main>
  </div>
</template>

<script lang="ts">
import Header from '~/components/Header.vue'
import GeneralContentList from './components/GeneralContentList.vue'
import Column1 from './components/Column1.vue'
import Column2 from './components/Column2.vue'
import Product from './components/Product.vue'
import { iPhoneModels } from './iPhoneModels'

export default {
  components: {
    Header,
    GeneralContentList,
    Column1,
    Product,
    Column2
  },

  data() {
    return {
      iPhoneModels,
      selectedModel: 0,
      dropDownList: false
    };
  },

  methods: {
    selectModel(index: number) {
      this.selectedModel = index
    },
    toggleDropDownList() {
      this.dropDownList = !this.dropDownList
    }
  }
};
</script>

<style scoped>
#app {
  background: linear-gradient(#666666, #f4f4f4, #666666);
}
.main-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Adjust order of components during mobile layout*/
@media(max-width: 640px) {
  .main-content .general-content-list-container {
    order: 1;
  }

  .main-content .product-container {
    order: 2;
    height: 290px
  }

  .main-content .column1 {
    order: 3;
  }

  .main-content .column2 {
    order: 4;
  }
}

@media (min-width: 640px) {
  .main-content {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1280px) {
  .main-content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>