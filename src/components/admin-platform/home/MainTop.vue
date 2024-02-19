<template>
    <div class="row">
        <div class="col-md-3">            
            <dv-decoration-8 class="d-none d-md-block"/>
        </div>
        <div class="col-md-6">
            <div class="row text-center">
                <span>&nbsp;&nbsp;夜猫王可视化平台</span>
            </div>
            <div class="row">
                <dv-decoration-5/>
            </div>
            
        </div>
        <div class="col-md-3">
            <dv-decoration-8 class="dv-left-set d-none d-md-block" :reverse="true"/>
        </div>
    </div>
</template>


<script>
    export default{
        name:"MainTop"
    }
</script>

<style scoped>
    .dv-decoration-5{
        width:80%;
        height:40px;
        margin: auto;
    }
    .dv-decoration-8{
        width:95%;
        height:50px;
    }
    .dv-left-set{
        float: right;
    }

    span{
        color: white;
        font-size: 190%;
        font-weight: 700;
        font-family: "华文彩云";
    }
    /* .title-set{
        width: 100%;
        background-image: url(../../../assets/main-view/top.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }



    .container-fluid{
        padding-top: 10px;
        padding-bottom: 10px;
    } */


</style>