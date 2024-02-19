<template>
    <div class="container-set">
        <div class="row">
            <div class="col-md-12">
                <dv-border-box-8>
                    <span class="game-set">各游戏玩家占比率</span>
                    <dv-active-ring-chart :config="game" style="width:100%;height:100%" />
                </dv-border-box-8>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <dv-border-box-7 class="border-box">
                    <span class="time-set">各时间段登录时长</span>
                    <dv-capsule-chart :config="time" style="width:90%;height:80%;margin-left: 5%;" />
                </dv-border-box-7>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MainLeft",
        data () {
            return {
                game:{
                    data: [
                        {
                        name: '英雄联盟',
                        value: 55
                        },
                        {
                        name: '吃鸡战场',
                        value: 120
                        },
                        {
                        name: '小小英雄',
                        value: 78
                        },
                        {
                        name: '我的世界',
                        value: 66
                        },
                        {
                        name: '原神',
                        value: 80
                        }
                    ]
                },
                time:{
                    data: [
                        {
                        name: '原神',
                        value: 167
                        },
                        {
                        name: '吃鸡战场',
                        value: 123
                        },
                        {
                        name: '小小英雄',
                        value: 98
                        },
                        {
                        name: '我的世界',
                        value: 75
                        },
                        {
                        name: '英雄联盟',
                        value: 66
                        },
                    ],
                    colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                    unit: '分钟',
                    showValue: true
                }
            }
        }
    }
</script>

<style scoped>
    .row{
        height: 300px;
    }
    .dv-border-box-8{
        background-image: url(../../../assets/main-view/contain.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
      
    }
    .dv-border-box-7{
        margin-top: 60px;
        background-image: url(../../../assets/main-view/contain.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .game-set{
        color:white;
        margin-left: 9%;
        font-size: 20px;
        font-weight: 700;
        margin-top: 6px;
        float: left;
    }
    .time-set{
        color:white;
        margin-left: 9%;
        font-size: 20px;
        font-weight: 700;
        margin-top: -65px;
        float: left;
    }


    .border-box{
        padding-top: 70px;
    }

    .container-set{
        padding-bottom: 70px;
    }
</style>