<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <span class="title">通讯录</span>
            </div>
            <div class="col-2"></div>
            <div class="col-2">
                <i class="bi bi-three-dots"  data-toggle="modal" data-target="#exampleModal"></i>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">好友搜索</h5>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-2"></div>
                            <div class="col-6">
                                <input>
                            </div>
                            <div class="col-3">
                                <button class="search-set">搜索</button>
                            </div>
                            <div class="col-1"></div>
                        </div>
                        <div class="row margin-top-set">
                            <div class="col-1">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>XXXXXXX</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>加你好友</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2">
                                <button class="agree-set">同意</button>
                            </div>
                            <div class="col-2">
                                <button class="disagree-set">拒绝</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-1">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>XXXXXXX</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>加你好友</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2">
                                <button class="agree-set">同意</button>
                            </div>
                            <div class="col-2">
                                <button class="disagree-set">拒绝</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-1">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>XXXXXXX</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>加你好友</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2">
                                <button class="agree-set">同意</button>
                            </div>
                            <div class="col-2">
                                <button class="disagree-set">拒绝</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-1">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>XXXXXXX</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2 text-center">
                                <span>加你好友</span>
                            </div>
                            <div class="col-1"></div>
                            <div class="col-2">
                                <button class="agree-set">同意</button>
                            </div>
                            <div class="col-2">
                                <button class="disagree-set">拒绝</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"TopAddress"
    }
</script>


<style scoped>
    .container-fluid{
        margin-top: 2vh;
        padding-top: 1vh;
        padding-bottom: 1vh;
        border: 0.1vh white solid;
    }
    .title{
        font-size: 5vw;
        color: white;
    }
    span{
        color: black;
        font-size: 1.5vh;
    }
    i{
        color: white;
        font-size: 6vw;
        cursor: pointer;
    }
    input{
        width: 100%;
        height: 3.3vh;
        outline:none;
    }
    button{
        width: 100%;
        font-size: 1.5vh;
        border-radius: 0.5vh;
        border: 0.3vh black solid;
    }
    button:hover{
        border: 0.2vh black solid;
    }
    .search-set{
        background-color: rgb(38, 174, 38);
    }
    .agree-set{
        background-color: rgb(40, 132, 224);
    }
    .disagree-set{
        background-color: rgb(252, 43, 43);
    }
    img{
        width: 50%;
        height: 50%;
        border-radius: 50%;
    }
    .margin-top-set{
        margin-top: 10px;
    }
    .col-1,.col-2{
        padding-left: 0%;
        padding-right: 0%;
    }
</style>