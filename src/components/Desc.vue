<template>
  <div id="Descri">
    <div class="description">
      <div class="jobNo mB">
        <span class="descHead">Job No. :</span>
        <span class="descDetail">2020/20390/BOC</span>
      </div>
      <div class="assigned mB">
        <span class="descHead">Assigned Inspector</span>
        <span class="descDetail">David Chow</span>
      </div>
      <div class="title mB">S9 Florissa Park Giffard Mansion</div>
    </div>
  </div>
</template>
 
<script>
  export default {
    name: 'Descri',
  }
</script>
 
<style scoped>
  .description{
    padding-top: 10px;
  }
  .mB {
    margin-bottom: 10px;
  }
  .descDetail {
    font-weight: 500;
  }
  .descHead {
    color: rgb(181, 183, 187);
  }
  .title {
    font-size: 17px;
    font-weight: 600;
  }
</style>