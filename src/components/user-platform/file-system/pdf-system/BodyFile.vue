<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="file-load-set">
                  <input type="file">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"BodyFile",
        mounted(){
        }
    }
</script>


<style scoped>
  .container-fluid{
    padding: 0%;
  }
  input{
    opacity: 0;
    height: 500px;
    width: 100%;
  }

  .file-load-set{
    border: 2px white dashed;
    background-image: url(../../../../assets/test/test01.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>