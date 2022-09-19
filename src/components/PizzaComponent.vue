<template>
  <div class="cards-list">
    <PizzaVue v-for="pizza in pizzaList" :pizza="pizza" :basket="basket"/>
  </div>
</template>

<script setup lang="ts">
import PizzaVue from '../vue/PizzaVue.vue'
import {Pizza, Ingredient, Basket} from '../object/Pizza.ts'

const pizzaList: Pizza[] = [
  {
    name: 'Regina',
    price: 11.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.MUSHROOM, Ingredient.OLIVE],
    size: 33,
    image: '/src/assets/pizza/regina.png'
  },

  {
    name: 'Margarita',
    price: 10.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.OLIVE],
    size: 33,
    image: '/src/assets/pizza/margarita.png'
  },

  {
    name: 'Chorizo',
    price: 12.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.MUSHROOM, Ingredient.CHORIZO, Ingredient.OLIVE],
    size: 33,
    image: '/src/assets/pizza/chorizo.png'
  },


  {
    name: 'Pescator',
    price: 12.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.FISH, Ingredient.GARLIC],
    size: 33,
    image: '/src/assets/pizza/pescator.png'
  },


  {
    name: 'Campione',
    price: 11.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.MUSHROOM, Ingredient.MEAT, Ingredient.EGG, Ingredient.ONION],
    size: 33,
    image: '/src/assets/pizza/campione.png'
  },

  {
    name: 'Quatro stagioni',
    price: 12.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.MUSHROOM, Ingredient.HAM, Ingredient.PEPPER, Ingredient.ONION, Ingredient.ARTICHOKE],
    size: 33,
    image: '/src/assets/pizza/quatro_stagioni.png'
  },

  {
    name: 'Neptuno',
    price: 12.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.TUNA, Ingredient.ONION, Ingredient.PEPPER, Ingredient.OLIVE, Ingredient.EGG],
    size: 33,
    image: '/src/assets/pizza/neptuno.png'
  },

  {
    name: 'Calzone',
    price: 12.00,
    ingredients: [Ingredient.TOMATO, Ingredient.CHEESE, Ingredient.HAM, Ingredient.EGG],
    size: 33,
    image: '/src/assets/pizza/calzone.png'
  },

  {
    name: 'Panzerotti a la romana',
    price: 12.00,
    ingredients: [Ingredient.CREAM, Ingredient.CHEESE, Ingredient.HAM, Ingredient.EGG],
    size: 33,
    image: '/src/assets/pizza/romana.png'
  },

  {
    name: 'Serrina',
    price: 14.00,
    ingredients: [Ingredient.CREAM, Ingredient.CHEESE, Ingredient.SALMON],
    size: 33,
    image: '/src/assets/pizza/serrina.png'
  },

  {
    name: 'Tartiflette',
    price: 13.00,
    ingredients: [Ingredient.CREAM, Ingredient.CHEESE, Ingredient.POTATOES, Ingredient.ONION, Ingredient.HAM],
    size: 33,
    image: '/src/assets/pizza/tartiflette.png'
  },

  {
    name: '7 Fromaggi',
    price: 15.00,
    ingredients: [Ingredient.SURPRISE],
    size: 33,
    image: '/src/assets/pizza/fromaggi.png'
  }
]

const props = defineProps({
  basket: {
    type: Object as PropType<Basket>,
    required: true
  }
})

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