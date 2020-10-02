<template>
  <div id="indexBody">
    <router-link to="/"><p class="title">科学五行命理</p></router-link>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IndexBody"
}
</script>

<style scoped>
#indexBody {
  /*background-color: #f4f4f5;*/
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #000;
  background-image: url("~@/assets/img/universe.jpg");
  background-size: cover;
  background-position-y: 90px;
  background-position-x: center;
  background-repeat: no-repeat;
  font-size: 36px;
}

.title {
  min-width: 300px;
  margin: 0;
  padding: 45px 0 30px 0;
  color: aliceblue;
  text-align: center;
  letter-spacing: 9px;
  font-weight: lighter;
}
</style>