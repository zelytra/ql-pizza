<template>
  <div class="wrapper-pizza">
    <img src="/src/assets/logo.webp" style="width: 64px; height: 64px">
    <h2>Pizza Delamama</h2>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.wrapper-pizza {
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
</style>