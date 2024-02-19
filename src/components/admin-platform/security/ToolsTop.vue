<template>
    <div class="row">
        <div class="col-md-2 text-center" style="background-color: red;">
            <span>控制主机</span>
        </div>
        <div class="col-md-2 text-center"  style="background-color: rgb(185, 185, 59);">
            <span>连接工具</span>
        </div>
        <div class="col-md-2 text-center"  style="background-color: blue;">
            <span>爆破工具</span>
        </div>
        <div class="col-md-2 text-center"  style="background-color: green;">
            <span>病毒样品</span>
        </div>
        <div class="col-md-2 text-center"  style="background-color: goldenrod;">
            <span>密码本</span>
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