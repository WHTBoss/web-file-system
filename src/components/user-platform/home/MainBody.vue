<template>
        <div class="row">
            <div class="col-md">
                <dv-border-box-13>
                    <i class="bi bi-person-badge"></i>
                    <span class="font-weight-bold text-monospace">  
                        用户总量：<br>
                        <strong class="font-weight-bolder">57</strong>人
                    </span>
                </dv-border-box-13>
            </div>


            <div class="col-md">
                <dv-border-box-13>
                    <i class="bi bi-alarm"></i>
                    <span class="font-weight-bold text-monospace">  
                        在线时长：<br>
                        <strong class="font-weight-bolder">67</strong>分钟
                    </span>
                </dv-border-box-13>
            </div>

         
            <div class="col-md">
                <dv-border-box-13>
                    <i class="bi bi-arrow-down-up"></i>
                    <span class="font-weight-bold text-monospace">  
                        登录次数：<br>
                        <strong class="font-weight-bolder">13</strong>次
                    </span>
                </dv-border-box-13>
            </div>

         
            <div class="col-md">
                <dv-border-box-13>
                    <i class="bi bi-file-diff"></i>
                    <span class="font-weight-bold text-monospace">  
                        文件总数：<br>
                        <strong class="font-weight-bolder">120</strong>份
                    </span>
                </dv-border-box-13>
            </div>


            <div class="col-md">
                <dv-border-box-13>
                    <i class="bi bi-envelope-paper"></i>
                    <span class="font-weight-bold text-monospace">  
                        反馈次数：<br>
                        <strong class="font-weight-bolder">203</strong>次
                    </span>
                </dv-border-box-13>
            </div>
        </div>
</template>


<script>
    export default{
        name:"MainBody",
        data(){
            return {
            }
        }
    }
</script>

<style scoped>

   .row{
        height: 25%;
        padding-top: 10px;
        padding-bottom: 10px;
   }

   i{
        font-weight: 800;
        font-size: 266%;
        margin-left: 10%;
        float: left;
        margin-top: 17px;
   }
   .font-weight-bold{
        margin-left: 6%;
        float: left;
        margin-top: 20px;
   }

   .dv-border-box-13{
        color: white;
   }

</style>