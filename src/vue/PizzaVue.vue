<template>
  <div class="card" @click="addToCart()">
    <img alt="pizza-icon" :src="pizza.image">
    <h1>{{ pizza.name }}</h1>
    <div class="details">
      <div class="content">
        <p>{{ pizza.price }}€ - {{ pizza.size }}cm</p>
        <p></p>
      </div>
      <div class="ingredient-container">
        <div class="ingredients" v-for="ingredient in ingredients">
          <img alt="ingredient" :src=ingredient.icon>
          <span class="tool-tip-text">{{ ingredient.name }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="addToCartAnimation" v-bind:class="{ fadeOut: fadeOut }" v-if="isAnimation">
    <img alt="italian" src="src/assets/italian.png">
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps({
  pizza: {
    type: Object as PropType<Pizza>,
    required: true
  },
  basket: {
    type: Object as PropType<Basket>,
    required: true
  }
})

const isAnimation = ref(false);
const fadeOut = ref(false);

const ingredients: Ingredients = props.pizza.ingredients;


function addToCart() {

  props.basket.basket.push(props.pizza);
  isAnimation.value = true;
  fadeOut.value = false;

  setTimeout(() => {
    fadeOut.value = true
  }, 1000)
  setTimeout(() => {
    isAnimation.value = false
    fadeOut.value = false
  }, 1300)
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 450px;
  height: 180px;
  border-radius: 4px;
  overflow: hidden; //TODO Remove
  margin-right: 14px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);


  h1 {
    font-family: Jost-Regular;
    text-align: start;
    width: 100%;
    margin-left: 8px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    width: 99%;

    p {
      font-family: Jost-Light;
      color: var(--secondary-text);
    }

    .ingredient-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .ingredients {
        position: relative;
      }

      .tool-tip-text {
        visibility: hidden;
        position: absolute;
        top: -36px;
        left: -27px;
        z-index: 2;
        background-color: var(--primary);
        color: var(--primary-text-inverted);
        padding: 5px;
        transition: 0ms;
        border-radius: 25px;
      }

      img {
        margin-right: 6px;
      }
    }
  }

  img[alt="pizza-icon"] {
    border-radius: 4px 4px 0px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    object-fit: cover;
    height: 100px;
  }

  img[alt="ingredient"] {
    width: 24px;
    height: 24px;
  }

}

.card:hover {
  transform: scale(1.03);
  z-index: 1;

  .ingredients:hover .tool-tip-text{
    visibility: visible;
  }
}

.addToCartAnimation {
  position: absolute;
  z-index: 999999;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 300ms;
  display: flex;
  justify-content: center;
  align-items: center;


  img {
    width: 200px;
    height: 200px;
    animation: mama 600ms infinite;
  }

  @keyframes mama {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(25deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  &.fadeOut {
    animation: fadeOut 300ms;
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
}
</style>