<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 text-center">
                <span>压缩：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf文件压缩</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 text-center">
                <span>合并：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf文件合并</button>
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 text-center">
                <span>转换：</span>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf转word</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf转html</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf转ppt</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf转excel</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">pdf转txt</button>
            </div>

            <div class="col-md-2"></div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">word转pdf</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">html转pdf</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">ppt转pdf</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">excel转pdf</button>
            </div>

            <div class="col-md-2">
                <button class="btn btn-outline-success">txt转pdf</button>
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