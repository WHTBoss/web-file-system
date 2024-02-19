<template>
    <div class="container-set">
        <div class="row">
            <div class="col-md-12">
                <dv-border-box-8>
                    <span class="game-set">各文件使用占比率</span>
                    <dv-active-ring-chart :config="game" style="width:100%;height:100%" />
                   
                </dv-border-box-8>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <dv-border-box-7 class="border-box">
                    <span class="time-set">各用户登录时长</span>
                    <dv-scroll-board :config="time" style="width:90%;height:80%;margin-left: 5%;" />
                </dv-border-box-7>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MainRight",
        data () {
            return {
                game:{
                    data: [
                        {
                        name: 'PDF',
                        value: 32
                        },
                        {
                        name: '图片',
                        value: 12
                        },
                        {
                        name: '音频',
                        value: 17
                        },
                        {
                        name: '视频',
                        value: 6
                        },
                        {
                        name: 'Excel',
                        value: 8
                        }
                    ]
                },
                time:{
                    header: ['名称', '爱好', '在线时长'],
                    data: [
                        ['王小明', '唱歌', '123分钟'],
                        ['万剑锋', '跳舞', '346分钟'],
                        ['刘德华', '唱歌', '74分钟'],
                        ['周润发', '打扑克', '638分钟'],
                        ['刘晓红', '跳舞', '479分钟'],
                        ['张丽丽', '打篮球', '548分钟'],
                        ['云溪溪', '做菜', '612分钟'],
                        ['刘强东', '喝茶', '286分钟'],
                        ['詹晓燕', '跳舞', '91分钟'],
                        ['张潇', '唱歌', '72分钟']
                    ]
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