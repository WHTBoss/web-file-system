<template>
    <div class="row row-set">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-2">
                <button class="btn btn-primary">文件</button>
            </div>
            <div class="col-8">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Please enter you message" aria-label="Please enter you message" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-success" type="button" id="button-addon2">发送</button>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"BottomTalk"
    }
</script>


<style scoped>
    .row-set{
        padding-top: 5vh;
        padding-bottom: 5vh;
        border: 0.2vh white solid;
    }
    .form-control{
        height: 38px;
    }
    .col-2,.col-9,.col-1{
        padding: 0%;
    }

    .btn-primary{
        width: 100%;
        height: 70%;
        font-size: 15px;
    }

</style>