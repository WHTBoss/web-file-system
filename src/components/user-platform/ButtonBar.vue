<template>
      <div class="text-center">
        <i class="bi bi-arrow-bar-left button-bar-icon-set-1" @click="hiddenButtonBar" v-if="isShowButtonBar"></i>
        <i class="bi bi-arrow-bar-right button-bar-icon-set-2" @click="showButtonBar" v-if="!isShowButtonBar"></i>
      </div>
</template>

<script>
  export default{
    name:"ButtonBar",
    data:function(){
      return{
        isShowButtonBar:true
      }
    },
    methods:{
      hiddenButtonBar(){
        this.$emit("changeButtonBar","width:3.5%");
        this.$emit("changeBody","width:96.5%");
        this.$emit("changeNavigation",true);
        this.isShowButtonBar = false;
      },
      showButtonBar(){
        this.$emit("changeButtonBar","width:15%");
        this.$emit("changeBody","width:85%");
        this.$emit("changeNavigation",false);
        this.isShowButtonBar = true;
      }
    }
  }
</script>

<style scoped>
.text-center{
  border: 2px black solid;
  border-top: 1px black solid;
  height: 100vh;
  background-color: #1972c6;
}
.button-bar-icon-set-1{
  margin-left: 1%;
    width:100%;
    color: black;
    font-size: 30px;
    cursor: pointer;
  }
  .button-bar-icon-set-2{
  margin-left: 1%;
    width:100%;
    color: black;
    font-size: 30px;
    cursor: pointer;
  }
i{
  line-height: 1vw;
  font-size: 1.6vw;
}
</style>