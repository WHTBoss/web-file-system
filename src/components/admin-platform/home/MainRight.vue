<template>
    <div class="row">
        <div class="col-md-12">
            <dv-border-box-11 title="各管理员登录次数">
                <dv-scroll-ranking-board :config="config" />
            </dv-border-box-11>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MainRight",
        data () {
            return {
                config:{
                    data: [
                        {
                        name: '万小微',
                        value: 55
                        },
                        {
                        name: '刘小新',
                        value: 103
                        },
                        {
                        name: '刘晓霞',
                        value: 78
                        },
                        {
                        name: '驻马店',
                        value: 66
                        },
                        {
                        name: '哔哩哔哩',
                        value: 80
                        },
                        {
                        name: 'WHTBoss',
                        value: 45
                        },
                        {
                        name: '雷晓晓',
                        value: 29
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