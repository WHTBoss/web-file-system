<template>
    <div class="row">
        <div class="col-md-2 col-6 text-center" style="background-color: red;">
            <span>用户报警</span>
        </div>
        <div class="col-md-2 col-6 text-center"  style="background-color: rgb(185, 185, 59);">
            <span>系统报警</span>
        </div>
    </div>
</template>


<script>
    export default{
        name:'ToolsTop'
    }
</script>

<style scoped>
    .row{
        margin-top: 5px;
    }
    span{
        font-size: larger;
        font-weight: bolder;
        color: white;
    }
    .col-md-2{
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>