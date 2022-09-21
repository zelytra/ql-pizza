<template>
  <div class="cart-wrapper">

    <div class="badge" v-if=" basket.basket.length > 0">
      <p>{{ basket.basket.length }}</p>
    </div>

    <img alt="icon" @click="onCartClick()" src="/src/assets/cart.png" style="width: 36px"/>

    <div class="blur-cart" v-if="displayCart"></div>
    <div class="wrapper-cart-list" v-bind:class="{ displayCart: displayCart }"
         @mouseleave="closeCart()">

      <div class="title">
        <h1>Panier</h1>
        <img src="/src/assets/cross.svg" alt="cross-icon" style="width: 24px;" @click="closeCart()">
      </div>

      <div class="pizza-cart" v-for="pizzaCart in formatedBasket">
        <div class="pizza-wrapper">
          <div class="amount-change">
            <img src="/src/assets/minus.svg" alt="icon-amount" @click="removePizza(pizzaCart.pizza)">
            <p style="font-family: Jost-Medium;font-size: 18px">{{ pizzaCart.count }}</p>
            <img src="/src/assets/add.svg" alt="icon-amount" @click="addPizza(pizzaCart.pizza)">
          </div>
          <p style="font-family: Jost-Medium;font-size: 18px">{{ pizzaCart.pizza.name }}</p>
          <p style="font-family: Jost-MediumItalic;font-size: 18px">{{ pizzaCart.pizza.price }}€</p>
        </div>
        <div class="separator"></div>
      </div>

      <div class="end-menu">
        <div class="button">Commander • {{ basket.getTotal() }}€</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import {Basket, PizzaBasket, Pizza} from '../object/Pizza';
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

function addPizza(pizza: Pizza) {
  props.basket.basket.push(pizza);
  formatedBasket.value = props.basket.getFormatedBasket();
}

function removePizza(pizza: Pizza) {
  const index = props.basket.basket.indexOf(pizza, 0);
  if (index > -1) {
    props.basket.basket.splice(index, 1);
  }
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

  .blur-cart {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 25;
    backdrop-filter: blur(9.5px);
  }

  .wrapper-cart-list {
    position: absolute;
    visibility: hidden;
    animation: fadeOut 100ms;
    background-color: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 35vw;
    top: 0px;
    right: 0px;
    height: calc(100vh - 8px);
    z-index: 99;
    border-radius: 10px 0px 0px 10px;
    overflow: hidden;
    overflow-y: auto;

    .title {
      display: flex;
      width: 96%;
      margin: 8px auto;
      justify-content: space-between;
      align-items: center;

      img[alt="cross-icon"] {
        padding: 4px;
        border-radius: 8px;
        width: 15px;
        transition: 600ms;
      }

      img[alt="cross-icon"]:hover {
        background-color: white;
      }
    }

    .end-menu {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin-bottom: 8px;

      .button {
        background-color: var(--primary);
        color: var(--primary-text-inverted);
        padding: 8px;
        border-radius: 4px;
        text-align: center;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
        margin: 4px;
        width: 96%;
        font-size: 22px;
        font-family: Jost-SemiBold;
      }

      .button:hover {
        background-color: #6382ff;
      }
    }

    .pizza-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;
      margin: auto;
      height: 70px;

      .amount-change {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #dcdcdc;
        padding: 8px;
        border-radius: 8px;
        width: 75px;

        img[alt="icon-amount"] {
          padding: 4px;
          border-radius: 8px;
          width: 15px;
          transition: 600ms;
        }

        img[alt="icon-amount"]:hover {
          background-color: white;
        }
      }
    }

    .separator {
      width: 85%;
      margin: auto;
      height: 0.8px;
      background-color: var(--primary);
      border-radius: 2px;
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

.cart-wrapper:hover img[alt="icon"] {
  background-color: rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    width: 0vh;
  }
  100% {
    opacity: 1;
    width: 40vh;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    width: 40vh;
  }
  100% {
    opacity: 0;
    width: 0vh;
  }
}
</style>