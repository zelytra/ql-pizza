<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import PizzaComponent from './components/PizzaComponent.vue'
import {Basket} from './object/Pizza'
import {ref} from 'vue'

const basket: Basket = ref<Basket>(new Basket());

</script>

<template>
  <HeaderComponent :basket="basket"/>
  <PizzaComponent :basket="basket"/>
</template>

<style lang="scss">

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  text-decoration: none;
  user-select: none;
  -webkit-transition: all 100ms ease;
  -moz-transition: all 100ms ease;
  -o-transition: all 100ms ease;
  transition: all 100ms ease;
}

/* Jost fonts imports*/
@font-face {
  font-family: Jost-SemiBold;
  src: url("assets/fonts/jost/Jost-SemiBold.ttf");
}

@font-face {
  font-family: Jost-MediumItalic;
  src: url("assets/fonts/jost/Jost-MediumItalic.ttf");
}

@font-face {
  font-family: Jost-Medium;
  src: url("assets/fonts/jost/Jost-Medium.ttf");
}

@font-face {
  font-family: Jost-Regular;
  src: url("assets/fonts/jost/Jost-Regular.ttf");
}

@font-face {
  font-family: Jost-Light;
  src: url("assets/fonts/jost/Jost-Light.ttf");
}


// Global color variable
body {
  --primary-text: #1f1f1f;
  --primary-text-inverted: #ffffff;
  --secondary-text: #494949;
  --secondary: #414141;
  --background-color: #f5f5f5;
  --primary: #7996FC;
}

body.dark-theme {
  --primary: #7996FC;
  --secondary: #414141;
  --primary-text: #FFFFFF;
  --secondary-text: #C9C9C9;
  --yellow-badge: #F3C05D;
  --blue-badge: #256F8E;
  --background-color: #2D2D2D;
}


html, body {
  height: 100%;
}

body {
  margin: 0;
  background-color: var(--background-color)
}

</style>
