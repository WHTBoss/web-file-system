<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 text-center">
                <span>压缩：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp3文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wav文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flac文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">aac文件压缩</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">ogg文件压缩</button>
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
                <button class="btn btn-outline-success">mp3文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wav文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flac文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">aac文件合并</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">oog文件合并</button>
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
                <button class="btn btn-outline-success">mp3 <i class="bi bi-arrow-left-right"></i> wav</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp3 <i class="bi bi-arrow-left-right"></i> flac</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp3 <i class="bi bi-arrow-left-right"></i> aac</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp3 <i class="bi bi-arrow-left-right"></i> oog</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">mp3 <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wav <i class="bi bi-arrow-left-right"></i> flac</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wav <i class="bi bi-arrow-left-right"></i> aac</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wac <i class="bi bi-arrow-left-right"></i> oog</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">wac <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flac <i class="bi bi-arrow-left-right"></i> aac</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flac <i class="bi bi-arrow-left-right"></i> oog</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">flac <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">aac <i class="bi bi-arrow-left-right"></i> oog</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">aac <i class="bi bi-arrow-left-right"></i> mp4</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">ogg <i class="bi bi-arrow-left-right"></i> mp4</button>
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