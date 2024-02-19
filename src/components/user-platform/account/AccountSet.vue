<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                <span>账号状态：</span>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="customRadioInline" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                    <label class="form-check-label" for="flexSwitchCheckDefault">在线</label>
                </div>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="customRadioInline" type="radio" role="switch" id="flexSwitchCheckChecked">
                    <label class="form-check-label" for="flexSwitchCheckChecked">离线</label>
                </div>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="customRadioInline" type="radio" role="switch" id="flexSwitchCheckChecked">
                    <label class="form-check-label" for="flexSwitchCheckChecked">隐身</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <span>个人信息：</span>
            </div>
            <div class="col-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="identityRadioInline" type="radio" role="switch" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">公开</label>
                </div>
            </div>
            <div class="col-5">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="identityRadioInline" type="radio" role="switch" id="flexSwitchCheckChecked">
                    <label class="form-check-label" for="flexSwitchCheckChecked">隐藏</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-3">
                <span>修改密码：</span>
            </div>
            <div class="col-9">
                <div class="row" style="margin-top: 10px;">
                    <div class="col-12">
                        <div class="input-group is-valid">
                            <input type="text" @keydown="changeStyle" class="form-control" :class="valid" aria-describedby="validatedInputGroupPrepend" placeholder="请输入原始密码" required>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="input-group is-valid">
                            <input type="text" @keydown="changeStyle" class="form-control" :class="valid" aria-describedby="validatedInputGroupPrepend" placeholder="请输入密码" required>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="input-group is-valid">
                            <input type="text" @keydown="changeStyle" class="form-control" :class="valid" aria-describedby="validatedInputGroupPrepend" placeholder="请再次输入密码" required>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <button class="btn btn-success" style="width: 100%;">点击确认</button>
            </div>
        </div>



        <div class="row">
            <div class="col-12 text-center">
                <a href="#" class="text-decoration-none">如果在账号设置时出现错误，请给管理员进行反馈！！！</a>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"",
        data:function(){
            return{
                valid:"is-invalid"
            }
        },
        methods:{
            changeStyle(){
                this.valid = "is-valid";
            }
        }
    }
</script>


<style scoped>
    .row{
        margin-top: 40px;
    }

    span{
        color: white;
        font-size: 3vw;
    }

    label{
        color: white;
        font-size: 3vw;
    }


    a{
        font-size: 3vw;
        color: red;
    }

    a:hover{
        color: rgb(191, 7, 7);
    }

</style>