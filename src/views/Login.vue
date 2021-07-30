<template>
  <div id="Login">
    <div class="desc">
      <div class='test'><span class="comColor">Test</span></div>
      <div class="title"><span>Smart Inspection System</span></div>
      <div class="login comColor"><router-link to="/floorPlan" class="loginLink">Login</router-link></div>
    </div>
    
    <div class="imgPosition"><img src="../assets/img/login.png" alt=""></div>
  </div>
</template>
 
<script>
  export default {
    name: 'Login',
  }
</script>
 
<style scoped>
  #Login {
    position: relative;
    height: 100vh;
  }
  .desc {
    padding: 0 30px;
    padding-top: 200px;
    text-align: center;
  }
  .test {
    font-size: 50px;
    font-weight: 300;
  }
  .title {
    font-size: 27px;
    font-weight: 500;
    margin: 20px 0;
  }
  .comColor {
    background-color: rgb(253, 222, 7);
  }
  .login {
    height: 50px;
    line-height: 50px;
    
  }
  .loginLink {
    color: black;
    font: 40px;
    font-weight: 400;
  }
  .imgPosition {
    position: absolute;
    bottom: 0px;
    /* left: 0;
    right: 0; */
  }
  img {
    width: 100vw;
    height: 271px;
  }
</style>