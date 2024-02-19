<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 text-center">
                <span>压缩：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mov文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wmv文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mkv文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flv文件压缩</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp4文件压缩</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 text-center">
                <span>合并：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mov文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wmv文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mkv文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flv文件合并</button>
            </div>
            
            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp4文件合并</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 text-center">
                <span>转换：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi <i class="bi bi-arrow-left-right"></i> mov</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi <i class="bi bi-arrow-left-right"></i> wmv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi <i class="bi bi-arrow-left-right"></i> mkv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi <i class="bi bi-arrow-left-right"></i> flv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">avi <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mov <i class="bi bi-arrow-left-right"></i> wmv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mov <i class="bi bi-arrow-left-right"></i> mkv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mov <i class="bi bi-arrow-left-right"></i> flv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mov <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wmv <i class="bi bi-arrow-left-right"></i> mkv</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wmv <i class="bi bi-arrow-left-right"></i> flv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wmv <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mkv <i class="bi bi-arrow-left-right"></i> flv</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mkv <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flv <i class="bi bi-arrow-left-right"></i> mp4</button>
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