<template>
  <div id="floorPlan">
    <div class="floor">
      <Descri />
      <floor-item />
      <floor-item />
    </div>
  </div>
</template>
 
<script>
  import Descri from '../components/Desc.vue';
  import FloorItem from '../components/FloorItem.vue';

  export default {
    name: 'floorPlan',
    components: {
      Descri,
      FloorItem
    }
  }
</script>
 
<style scoped>
 .floor {
   padding: 0px 20px;
 }
 
</style>