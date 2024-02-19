<template>
    <div class="row container-set">
        <div class="row">
            <div class="col-1">
                <img src="../../../../assets/login/background.png">
            </div>
            <div class="col-5">
                <span>XXXXXXX</span>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning">聊天</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" @click="showToast">删除</button>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                <img src="../../../../assets/login/background.png">
            </div>
            <div class="col-5">
                <span>XXXXXXX</span>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning">聊天</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" @click="showToast">删除</button>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                <img src="../../../../assets/login/background.png">
            </div>
            <div class="col-5">
                <span>XXXXXXX</span>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning">聊天</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" @click="showToast">删除</button>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                <img src="../../../../assets/login/background.png">
            </div>
            <div class="col-5">
                <span>XXXXXXX</span>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning">聊天</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" @click="showToast">删除</button>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                <img src="../../../../assets/login/background.png">
            </div>
            <div class="col-5">
                <span>XXXXXXX</span>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning">聊天</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" @click="showToast">删除</button>
            </div>
        </div>

        <div class="row">
            <div class="col-1">
                <img src="../../../../assets/login/background.png">
            </div>
            <div class="col-5">
                <span>XXXXXXX</span>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">查看</button>
            </div>
            <div class="col-2">
                <button class="btn btn-warning">聊天</button>
            </div>
            <div class="col-2">
                <button class="btn btn-danger" @click="showToast">删除</button>
            </div>
        </div>


        <div class="modal fade" id="exampleModal1" tabindex="10" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">好友查看</h4>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                                <span>名称：</span>
                            </div>
                            <div class="col-md">
                                <span>XXXXXXXXXXXXXXXXXX</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <span>Gitee账号：</span>
                            </div>
                            <div class="col-md">
                                <span>XXXXXXXXXXXXXXXXXX</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <span>GitHub账号：</span>
                            </div>
                            <div class="col-md">
                                <span>XXXXXXXXXXXXXXXXXX</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <span>QQ账号：</span>
                            </div>
                            <div class="col-md">
                                <span>XXXXXXXXXXXXXXXXXX</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">关闭</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default{
        name:"BodyAddress",
        methods:{
            showToast(){
                alert("XXXX,删除成功！！！");
            }
        }
    }
</script>


<style scoped>
    .container-set{
        overflow-y: scroll;
        border: 0.1vh white solid;
        height: 80vh;
        padding-bottom: 20vh;
    }
    .row{
        margin-top: 15px;
    }
    img{
        width: 7vw;
        height: 7vw;
        border-radius: 3.5vw;
    }
    
    .col-5 span{
        font-size: 70px;
        color: white;
    }
    
    .col-md-3 span,.col-md span{
        font-size: 25px;
    }

    .btn-primary,.btn-danger,.btn-warning{
        width: 100%;
        font-size: 3vw;
    }

    .col-2{
        padding: 0%;
    }

    @media (max-width: 450px) {
        .col-5 span {
            font-size: 20px;
           color: white;
        }
    }
</style>