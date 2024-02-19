<template>
    <div class="row">
        <div class="col-md-12">
            <dv-border-box-11 title="各用户登录次数">
                <dv-scroll-ranking-board :config="config" />
            </dv-border-box-11>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MainLeft",
        data () {
            return {
                config:{
                    data: [
                        {
                        name: '房热销',
                        value: 52
                        },
                        {
                        name: '鬼潇潇',
                        value: 121
                        },
                        {
                        name: '爱马仕',
                        value: 90
                        },
                        {
                        name: '朱金星',
                        value: 166
                        },
                        {
                        name: '西兴隆',
                        value: 88
                        },
                        {
                        name: '爱茜茜',
                        value: 54
                        },
                        {
                        name: '小咯咯',
                        value: 92
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
.dv-border-box-11{
    width: 100%;
    height: 500px;
    padding-top: 100px;
}

.dv-scroll-ranking-board{
    width:80%;
    height:300px;
    margin: auto;
   
}
</style>