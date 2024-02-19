<template>
    <div class="container-set">
        <div class="row title-set">
            <div class="col-7 text-center">
                <span class="title-text-set">消息列表</span>
            </div>
            <div class="col-5">
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">发送消息</button>
            </div>
        </div>



        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">发送消息</h2>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">标题：</span>
                                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">内容：</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-primary" data-dismiss="modal" style="width: 100%;">确定</button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" style="width: 100%;">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"TopMessage",
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
        font-size: 25px;
        font-weight: bolder;
        float: right;
    }
    .btn-primary{
        width: 100px;
        float: right;
    }

    img{
        width: 3vw;
        height: 3vw;
        border-radius: 3vw;
    }
</style>