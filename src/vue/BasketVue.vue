<template>
  <div class="cart-wrapper">
    <div class="badge" v-if=" basket.basket.length > 0">
      <p>{{ basket.basket.length }}</p>
    </div>
    <img @click="onCartClick()" src="src/assets/cart.png" style="width: 36px"/>
  </div>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import {Basket} from '../object/Pizza'

function onCartClick() {
  console.log(props.basket)
}

const props = defineProps({
  basket: {
    type: Object as PropType<Basket>,
    required: true
  }
})

</script>

<style scoped lang="scss">
.cart-wrapper {
  position: relative;

  img {
    margin-right: 38px;
  }

  .badge {
    top: -9px;
    right: 11px;
    position: absolute;
    z-index: 99;
    background-color: var(--primary);
    padding: 5px;
    border-radius: 5px;

    p {
      font-size: 12px;
      font-family: Jost-SemiBold;
      color: var(--primary-text-inverted);
    }
  }
}
</style>