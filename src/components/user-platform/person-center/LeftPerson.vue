<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <span>头像：</span>
            </div>
            <div class="col-9">
                <div class="input-set" :style="photo">
                    <input @change="uploadFile" accept="image/*" class="head-photo-set" type="file">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"LeftPerson",
        data:function(){
            return{
                imagePath:"",
                photo:"background-image: url(./static/test/test01.png)"
            }
        },
        methods:{
            uploadFile(){
                alert(this.imagePath);
            }
        }
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

    .name-set{
        width: 100%;
        border: 0.1vw white solid;
        outline:none;
        margin-top: 1.5vh;
        border-radius: 2px;
    }

    .head-photo-set{
        width: 100%;
        height: 300px;
        opacity: 0;
    }
    .input-set{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: 0.2vw white dashed;
        border-radius: 5px;
        margin-top: 1.5vh;
    }
</style>