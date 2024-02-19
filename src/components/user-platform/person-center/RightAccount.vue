<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <span>Gitee账号：</span>
            </div>
            <div class="col-9">
                <input class="account-set">
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <span>GitHub账号：</span>
            </div>
            <div class="col-9">
                <input class="account-set">
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <span>QQ账号：</span>
            </div>
            <div class="col-9">
                <input class="account-set">
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"RightAccount"
    }
</script>


<style scoped>
    .row{
        padding-top: 10px;
    }
    span{
        color: white;
        width: 100%;
        font-size: 2vw;
    }

    .account-set{
        width: 100%;
        border: 0.1vw white solid;
        outline:none;
        margin-top: 1.5vh;
        border-radius: 3px;
    }

</style>