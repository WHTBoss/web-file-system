<template>
    <div class="row" style="margin-top: 0%;">
        <div class="row">
            <div class="col-6">
                <span>@系统设置</span>
            </div>
            <div class="col-6">
                <span class="float-set">当前管理员：XXXXX</span>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <span>~更改密码~</span>
            </div>
            <div class="col-6">
                <button class="btn btn-primary float-set">保存</button>
            </div>
        </div>

        <div class="row">
            <div class="input-group col-12">
                <span class="input-group-text">原先密码：</span>
                <input type="text" class="form-control" aria-label="Username">
                <span class="input-group-text">输入密码：</span>
                <input type="text" class="form-control" aria-label="Server">
                <span class="input-group-text">再次输入密码：</span>
                <input type="text" class="form-control" aria-label="Server">
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <span>~更改邮箱~</span>
            </div>
            <div class="col-6">
                <button class="btn btn-primary float-set">保存</button>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="input-group mb-3">
                    <span class="input-group-text">请输入修改的邮箱：</span>
                    <input type="text" class="form-control" aria-label="Username">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <span>~用户注册跳转~</span>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="RadioInline1" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                    <label class="form-check-label" for="flexSwitchCheckDefault">允许</label>
                </div>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="RadioInline1" type="radio" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">禁止</label>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-6">
                <span>~注册机制~</span>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="RadioInline2" type="radio" role="switch" id="flexSwitchCheckDefault" checked>
                    <label class="form-check-label" for="flexSwitchCheckDefault">使用</label>
                </div>
            </div>
            <div class="col-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" name="RadioInline2" type="radio" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">禁用</label>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default{
        name:"SystemTop"
    }
</script>


<style scoped>
    .col-6 span{
        color: white;
        font-size: larger;
        font-weight: bolder;
    }
    @media (max-width: 450px) {
        .input-group span{
            font-size: smaller;
        }
    }
    span{
        font-size: larger;
        font-weight: bolder;
    }
    .float-set{
        float: right;
    }
    .row{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    button{
        width: 50%;
    }

    label{
        color: white;
    }
</style>