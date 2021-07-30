<template>
  <div id="formA">
    <div class="topBar">
      <a-row>
        <a-col :span="12" class="selected">
          <a-icon type="file-add" />
        </a-col>
        <a-col :span="12">
          <a-icon type="picture" />
        </a-col>
      </a-row>
    </div>
    
    <div class="fomrATest">
    
    <Descri class="descri"/>

    <a-form layout="horizontal" @submit="handleSubmit">
      <a-form-item v-for='(item,index) in inputType' :key='index' :label="'Field '+inputType[index]">
        <a-input :placeholder="'input placeholder'+inputType[index]" :disabled='isDisabled'/>
      </a-form-item>

      <a-form-item class="buttonItem" >
        <a-row>
          <a-col :span="12">
           <a-button type="primary" html-type="submit" class='saveButton'>
             Save Only
            </a-button> 
          </a-col>
          <a-col :span="12">
            <a-button type="primary" class='routerButton' >
              <router-link to="/floorPlan">Mark as Completed</router-link>  
            </a-button>
          </a-col>
        </a-row>
      </a-form-item>

    </a-form>

    </div>
  </div>
</template>
 
<script>
  import Descri from '../components/Desc.vue'
  export default {
    name: 'formA',
    data() {
      return {
        inputType: ['A','B','C','D','E'],
        isDisabled: false
      }
    },
    components: {
      Descri
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        console.log(111);
        this.isDisabled = !this.isDisabled;
      }
    }
  }
</script>
 
<style scoped>
  .topBar {
    text-align: center;
    background-color: rgb(122, 131, 138);
    height: 40px;
    line-height: 40px;
    
  }
  .fomrATest {
    margin-top: 30px;
    padding: 0px 20px;
  }
  .descri {
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(236, 236, 236);
  }
  .selected {
    color: white;
    border-bottom: 4px solid rgb(251, 224, 75);
  }
  .saveButton {
    background-color: rgb(37, 40, 57);
    color: white;
    border: none;
  }
  .routerButton {
    background-color: rgb(253, 222, 7);
    color: black;
    border: none;
  }
</style>