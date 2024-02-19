<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 image-set"></div>
        </div>
        <div class="row">
            <div class="col-12">
                <span class="text-break text-monospace font-weight-bold font-body-set">
                    &nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <span class="text-monospace font-weight-bolder">Gitee账号：XXXXXXXXXXXX</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <span class="text-monospace font-weight-bolder">HubGit账号：XXXXXXXXXXXX</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <span class="text-monospace font-weight-bolder">QQ账号：XXXXXXXXXXXX</span>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <span class="text-monospace font-weight-bolder">QQ交流群：XXXXXXXXXXXX</span>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"RightFeedback"
    }
</script>


<style scoped>
    .row{
        margin-top: 3vh;
    }
    .image-set{
        background-image: url(../../../assets/login/background.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 40vh;
    }
    .font-body-set{
        color: white;
        font-size: 15px;
    }
    
    span{
        color: white;
        font-size: 20px;
    }
</style>