<template>
  <div class="card">
    <img alt="pizza-icon" :src="pizza.image">
    <h1>{{ pizza.name }}</h1>
    <div class="details">
      <div class="content">
        <p>{{ pizza.price }}€ - {{ pizza.size }}cm</p>
        <p></p>
      </div>
      <div class="ingredients">
        <img alt="ingredient" v-for="ingredient in ingredients" :src=ingredient.icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  pizza: {
    type: Object as PropType<Pizza>,
    required: true
  }
})

const ingredients: Ingredients = props.pizza.ingredients;
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


  h1{
    font-family: Jost-Regular;
    text-align: start;
    width: 100%;
    margin-left: 8px;
  }

  .details{
    display: flex;
    justify-content: space-between;
    width: 99%;

    p{
      font-family: Jost-Light;
      color: var(--secondary-text);
    }

    .ingredients{
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img{
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

.card:hover{
  transform: scale(1.03);
  z-index: 99;
}
</style>