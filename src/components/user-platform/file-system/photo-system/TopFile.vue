<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 text-center">
                <span>压缩：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpg文件压缩</button>
            </div>
            
            <div class="col-md-2">
                <button class="btn btn-outline-success">jpeg文件压缩</button>
            </div>
            
            <div class="col-md-2">
                <button class="btn btn-outline-success">bmp文件压缩</button>
            </div>
            
            <div class="col-md-2">
                <button class="btn btn-outline-success">webp文件压缩</button>
            </div>
            
            <div class="col-md-2">
                <button class="btn btn-outline-success">png文件压缩</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 text-center">
                <span>合并：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpg文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpeg文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">bmp文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">webp文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">png文件合并</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 text-center">
                <span>转换：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpg <i class="bi bi-arrow-left-right"></i> bpm</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpg <i class="bi bi-arrow-left-right"></i> webp</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpg <i class="bi bi-arrow-left-right"></i> png</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpg <i class="bi bi-arrow-left-right"></i> jpeg</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpeg <i class="bi bi-arrow-left-right"></i> bpm</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpeg <i class="bi bi-arrow-left-right"></i> webp</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">jpeg <i class="bi bi-arrow-left-right"></i> png</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">bpm<i class="bi bi-arrow-left-right"></i>webp</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">bpm <i class="bi bi-arrow-left-right"></i> png</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">webp <i class="bi bi-arrow-left-right"></i> png</button>
            </div>
        </div>
        
    </div>
</template>


<script>
    export default{
        name:""
    }
</script>


<style scoped>
    .container-fluid{
        margin-top: 10px;
    }
    .row{
        margin-bottom: 10px;
        border: 0.1vh white solid;
        padding: 2vh;
    }

    .col-2{
        padding: 0%;
        
    }
    span{
        color: white;
        font-size: 3.5vh;
        
    }

    button{
        font-size: 2.5vh;
        margin-bottom: 1vh;
        width: 90%;
    }
</style>