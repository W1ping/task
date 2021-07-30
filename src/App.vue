<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <a-spin tip="Submitting..." v-if="isSpin">
        <div class="spin-content">
          <tab-bar></tab-bar>
          <router-view class="viewBC"></router-view>
        </div>
      </a-spin>
      <div class="deSpin" v-if="!isSpin">
        <tab-bar></tab-bar>
        <router-view class="viewBC"></router-view>
      </div>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'
export default {
  name: 'app',
  data() {
    return {
      isSpin: false
    }
  },
  components: {
    TabBar
  },
  mounted() {
      this.$bus.$on('spin', () => {
        // this.$router.push({path:'/formA'});
        this.$bus.$emit('spinning')
        setTimeout(()=> {
          this.isSpin = false;
        },3000)
        this.isSpin = true;
      })
    },
}
</script>

<style lang="scss">
  html,body {
    width: auto !important;
    height: auto !important;
  }
  
  .viewBC {
    background-color: rgb(249, 249, 249);
  }
  .spin-content {
   height: 100vh; 
  }
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
