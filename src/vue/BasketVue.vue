<template>
  <div class="cart-wrapper" @mouseleave="closeCart()">

    <div class="badge" v-if=" basket.basket.length > 0">
      <p>{{ basket.basket.length }}</p>
    </div>

    <img alt="icon" @click="onCartClick()" src="src/assets/cart.png" style="width: 36px"/>

    <div class="wrapper-cart-list" v-bind:class="{ displayCart: displayCart }" v-if="formatedBasket.length>0">
      <div class="pizza-cart" v-for="pizzaCart in formatedBasket">
        <img :src="pizzaCart.pizza.image" style="width: 64px;height: 64px;object-fit: cover;">
        <p style="font-family: Jost-Medium;font-size: 18px">{{ pizzaCart.pizza.name }}</p>
        <p style="font-family: Jost-MediumItalic;font-size: 18px">{{ pizzaCart.count }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import {Basket, PizzaBasket} from '../object/Pizza';
import {ref} from 'vue';

const displayCart = ref(false);
let formatedBasket = ref<PizzaBasket[]>([]);

function closeCart() {
  displayCart.value = false;
}

function onCartClick() {
  displayCart.value = true;
  formatedBasket.value = props.basket.getFormatedBasket();
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

  .wrapper-cart-list {
    position: absolute;
    visibility: visible;
    animation: fadeOut 100ms;
    background-color: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 245px;
    top: 55px;
    right: 6px;
    height: 600px;
    z-index: 99;

    .pizza-cart{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 98%;
      margin: auto;
      height: 70px;
    }

    &.displayCart {
      animation: fadeIn 100ms;
      visibility: visible !important;
    }
  }

  img[alt="icon"] {
    margin-right: 38px;
    padding: 10px;
    border-radius: 8px;
  }

  .badge {
    top: 0px;
    right: 28px;
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

.cart-wrapper:hover img {
  background-color: rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>