<template>
  <div id="formB">
    <h1>{{title}}</h1>
  </div>
</template>
 
<script>
  export default {
    name: 'formB',
    data() {
      return {
        title: ''
      }
    },
    mounted() {
      this.$bus.$on('FormBActive', (title) => {
        this.title = title;
        console.log(this.title);
      })
    },
  }
</script>
 
<style scoped>
  h1 {
    padding: 50px 20px;
  }
</style>