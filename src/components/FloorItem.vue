<template>
  <div id="FloorItem">
    <div class="imgCard">
      <img src="../assets/img/floor.png" alt="">
    </div>
    <div class="floorForm">
      <a-form layout="horizontal">
        <a-form-item key='floor'>
          <a-input placeholder='Floor Plan A' v-model="title"/>
        </a-form-item>
        <a-form-item class="buttonItem" @click.native="submitMes">
          <a-button type="primary" html-type="submit" class="routerButton" >
            <router-link to="/formB">Mark as Completed</router-link>  
          </a-button>
        </a-form-item>
      </a-form> 
    </div>
  </div>
</template>
 
<script>
  export default {
    name: 'FloorItem',
    data (){
      return {
        title: ''
      }
    },
    methods: {
      submitMes() {
        this.$bus.$emit('FormBActive',this.title);
      }
    }
  }
</script>
 
<style scoped>
  .imgCard {
   background-color: white;
   padding: 40px 20px;
   margin: 20px 0px;
   box-shadow: 3px;
   border: 2px solid rgb(236, 236, 236);
 }
 .imgCard img {
   width: 100%;
   height: 80%;
   margin: 0px auto;
 }
 .ant-btn {
   width: 100%;
 }
 .buttonItem {
   height: 50px;
   line-height: 50px;
   font-size: 15px;
 }
 .routerButton {
    background-color: rgb(253, 222, 7);
    color: black;
    border: none;
  }
</style>