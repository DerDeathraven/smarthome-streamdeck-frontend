<template>
  <div class="navbar">
    <div class="title">JLCD - Streamdeck Smarthome Control</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.navbar {
  width: 100vw;
  height: 10vh;
  background-color: $tile;
  display: flex;
  justify-content: space-between;
  .title {
    height: 100%;
    width: 40vw;
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .backendConnectionWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 10%;

    .backendConnection {
      height: 40%;
      padding: 1rem;
      border-radius: 0.2rem;
      display: flex;
      text-align: center;

      align-items: center;
      &.red {
        background-color: red;
      }
      &.green {
        background-color: green;
      }
    }
  }
}
</style>
