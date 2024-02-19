<template>
    <div class="row">
        <div class="col-md-2">
            <div class="row text-center">
                <span>总内存占比</span>
            </div>
            <div class="row">
                <dv-digital-flop :config="config1"  />
            </div>
        </div>


        <div class="col-md-2">
            <div class="row text-center">
                <span>游戏线程占比</span>
            </div>
            <div class="row">
                <dv-digital-flop :config="config2" />
            </div>
        </div>

        
        <div class="col-md-2">
            <div class="row text-center">
                <span>禁用用户占比</span>
            </div>
            <div class="row">
                <dv-digital-flop :config="config4" />
            </div>
        </div>


        <div class="col-md-2">
            <div class="row text-center">
                <span>游戏线程个数</span>
            </div>
            <div class="row">
                <dv-digital-flop :config="config3" />
            </div>
        </div>


        <div class="col-md-2">
            <div class="row text-center">
                <span>反馈消息数量</span>
            </div>
            <div class="row">
                <dv-digital-flop :config="config5" />
            </div>
        </div>

        <div class="col-md-2">
            <div class="row text-center">
                <span>管理员登录次数</span>
            </div>
            <div class="row">
                <dv-digital-flop :config="config6" />
            </div>
        </div>
    </div>
</template>



<script>
    export default{
        name:"MainBody",
        data(){
            return {
                config1:{
                    number: [27], 
                    content: '{nt}%'
                },
                config2:{
                    number: [33], 
                    content: '{nt}%'
                },
                config3:{
                    number: [15], 
                    content: '{nt}个'
                },
                config4:{
                    number: [57], 
                    content: '{nt}%'
                },
                config5:{
                    number: [119], 
                    content: '{nt}个'
                },
                config6:{
                    number: [53], 
                    content: '{nt}次'
                }
            }
        }
    }
</script>

<style scoped>
    .col-md-2{
        height: 150px;
        background-image: url(../../../assets/main-view/back01.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    span{
        color: white;
        height: 68px;
        margin-top: 20px;
        font-weight: 800;
        font-size: 140%;
    }

    .dv-digital-flop{
        width:200px;height:50px; margin: auto;
    }

   /* .row{
        height: 25%;
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

   .container-fluid{
        padding-bottom: 10px;
   } */
</style>