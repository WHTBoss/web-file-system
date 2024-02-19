<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <span class="font-weight-bolder text-monospace">标题：</span>
            </div>
            <div class="col-9">
                <input type="text" class="form-control" placeholder="请输入标题">
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <span class="font-weight-bolder text-monospace">内容：</span>
            </div>
            <div class="col-9">
                <textarea class="form-control" :class="valid" @keydown="changeValid" placeholder="Required example textarea" required></textarea>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <button class="btn btn-primary" style="width: 100%;">点击发送</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"LeftFeedback",
        data:function(){
            return {
                valid:"is-invalid"
            }
        },
        methods:{
            changeValid(){
                this.valid = "is-valid";
            }
        }
    }
</script>


<style scoped>
    .row{
        margin-top: 3vh;
    }
    span{
        color: white;
        font-size: 25px;
    }
    textarea{
        height: 50vh;
    }
</style>