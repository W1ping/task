<template>
  <div id="TabBar">

    <div class="subTab">
      <a-row>
        <a-col :span="6" @click="back">
          <a-icon type="left-circle" theme="twoTone" />
        </a-col>
        <a-col :span="12" class="subTitle">
          {{subTitle}}
        </a-col>
        <a-col :span="6">
          <a-icon type="rocket" :theme="istwoTone()" @click='loading'/>
        </a-col>
      </a-row>
    </div>

    <div class="supTab">
      <a-menu mode="horizontal" class="supMenu" >

        <a-menu-item :key='supTabKey[index]' class="supMitem" 
          v-for="(item,index) in supTabKey" 
          :class="{'ant-menu-item-selected': isActive[index],'deSelected': isDeActive[index]}"
          :disabled="isDiabled[index]"
          @click="supTabClick(index)" 
        >
          <a-icon :type="iconType[index]" />
          <router-link :to="supTabKey[index]"></router-link>
        </a-menu-item>

      </a-menu>

  </div>

  </div>
</template>
 
<script>
  export default {
    name: 'TabBar',
    data (){
      return {
        subTitleArray: ['Job Report-PartA','Floor Plan','Job Report-PartB'],
        iconType: ['profile','build','file-protect'],
        supTabKey: ['/formA','/floorPlan','/formB'],    //:key value and route path
        subTitle: 'Job Report',                         
        isDiabled: [false,false,true],
        isActive: [false,false,false],
        isDeActive: [false,false,false],
        istwoTone () {  // twoTone 双色，outlined 没有颜色
          return this.isDiabled[2] ? 'outlined' : 'twoTone';
        },
        isFormB: false
      }
    },
    methods: {
      supTabClick(index) {
        this.isActive = [false,false,false];
        this.isDeActive = [true,true,true];

        this.subTitle = this.subTitleArray[index];

        this.isActive[index] = true;
        this.isDeActive[index] = false;
      },
      back() {
        this.$router.push({path:'/formA'});
        this.supTabClick(0);
      },
      loading() {
        if(this.isFormB) {
          this.$bus.$emit('spin');
        }
      }
    },
    watch:{   //监听路由变化
      $route(to){  
        if(to.path == '/formB'){
          this.isFormB = true;
          this.isDiabled = [false,false,false];
        }else {
          this.isFormB = false;
          this.isDiabled = [false,false,true];
        }
        this.supTabClick(this.supTabKey.indexOf(to.path));
      }
    },
    mounted() {
      this.$bus.$on('spinning', () => {
        this.isActive = [false,false,false];
        this.isDeActive = [false,false,false];
        this.$router.push({path:'/formA'});
      })
    },
  }
</script>
 
<style scoped>
  .subTab {
    background-color: white;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    margin: 5px 0px;
  }
  .subTitle {
    font-weight: 600;
  }
  .supTab {
    text-align: center;
  }
  .supMenu {
    display: flex;
  }
  .supMitem {
    flex: 1;
  }
  .supTab .ant-menu-item-selected {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }
  .supMenu .deSelected {
    color: inherit;
    border-bottom: none;
  }

  
</style>