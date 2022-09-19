<template>
  <div class="cards-list">
    <PizzaVue v-for="pizza in pizzaList" :pizza="pizza"/>
  </div>
</template>

<script setup lang="ts">
import PizzaVue from '../vue/PizzaVue.vue'
import {Pizza, Ingredient} from '../object/Pizza.ts'

const pizzaList: Pizza[] = [
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.jpg'
  },
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.svg'
  },
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.svg'
  },
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.svg'
  },
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.svg'
  },
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.svg'
  },
  {
    name: 'test',
    price: 42.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE],
    size: 30,
    image: '/src/assets/pizza/pizza1.svg'
  },
]
</script>

<style scoped>
.cards-list {
  display: flex;
  justify-content: center;
  width: 97%;
  margin: 15px auto auto;
  flex-wrap: wrap;
}
</style>