<template>
  <div class="wrapper-pizza">
    <div class="content">
      <img @click="changeColor()" src="/src/assets/logo.webp" style="width: 64px; height: 64px">
      <h2>Pizza Delamama</h2>
    </div>
    <div class="content">
      <BasketVue :basket="basket"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import BasketVue from '/src/vue/BasketVue.vue'
import {Basket} from '../object/Pizza'
import {PropType} from 'vue';

const props = defineProps({
  basket: {
    type: Object as PropType<Basket>,
    required: true
  }
})

function changeColor(){
  document.body.classList.toggle("dark-theme");
}
</script>

<style scoped lang="scss">
.wrapper-pizza {
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;

  .content {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      margin-right: 24px;
    }

    h2 {
      color: var(--primary-text);
      font-family: Jost-SemiBold;
    }
  }
}
</style>