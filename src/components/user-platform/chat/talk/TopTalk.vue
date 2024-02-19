<template>
    <div class="container-set">
        <div class="row title-set">
            <div class="col-12 text-center">
                <span class="title-text-set">XXXXXX</span>
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">切换</button>
            </div>
        </div>



        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">好友切换</h2>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="container">


                        <div class="row margin-top-set">
                            <div class="col-2">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col text-center">
                                <span class="people-set">XXXXXXX</span>
                            </div>
                            <div class="col">
                                <button class="btn btn-success">切换</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-2">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col text-center">
                                <span class="people-set">XXXXXXX</span>
                            </div>
                            <div class="col">
                                <button class="btn btn-success">切换</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-2">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col text-center">
                                <span class="people-set">XXXXXXX</span>
                            </div>
                            <div class="col">
                                <button class="btn btn-success">切换</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-2">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col text-center">
                                <span class="people-set">XXXXXXX</span>
                            </div>
                            <div class="col">
                                <button class="btn btn-success">切换</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-2">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col text-center">
                                <span class="people-set">XXXXXXX</span>
                            </div>
                            <div class="col">
                                <button class="btn btn-success">切换</button>
                            </div>
                        </div>

                        <div class="row margin-top-set">
                            <div class="col-2">
                                <img src="../../../../assets/login/background.png">
                            </div>
                            <div class="col text-center">
                                <span class="people-set">XXXXXXX</span>
                            </div>
                            <div class="col">
                                <button class="btn btn-success">切换</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" style="width: 100%;">关闭</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"TopTalk",
        data:function(){
            return {

            }
        }
    }
</script>


<style scoped>
    .container-set{
        margin-top: 2vh;
    }
    .title-set{
        border: 1px white solid;
        padding-top: 2vh;
        padding-bottom: 2vh;
    }
    
    .title-text-set{
        color: white;
        font-size: 5vw;
        margin-left: 150px;
    }

    .btn-primary{
        width: 150px;
        height: 6vh;
        margin-top: 4vh;
        float: right;
    }

    @media (max-width: 450px) {
        .title-text-set{
            color: white;
            font-size: 30px;
            margin-left: 80px;
        }

        .btn-primary{
            font-size: smaller;
            width: 80px;
            height: 5vh;
            margin-top: 0;
            float: right;
        }
    }


    img{
        width: 3vw;
        height: 3vw;
        border-radius: 3vw;
    }
    .people-set{
        font-size: 3vw;
    }
    .margin-top-set{
        margin-bottom: 2vh;
    }
    .btn-success{
        width: 100%;
        height: 4vh;
        margin-top: 6%;
    }
</style>