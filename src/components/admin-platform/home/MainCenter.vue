<template>
    <div class="row">
        <div class="col-md-12">
            <dv-border-box-11 title="各用户禁用次数">
                <dv-scroll-ranking-board :config="config" />
            </dv-border-box-11>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MainCenter",
        data () {
            return {
                config:{
                    data: [
                        {
                        name: '席晓晓',
                        value: 23
                        },
                        {
                        name: '王晓晓',
                        value: 18
                        },
                        {
                        name: '蔡徐坤',
                        value: 77
                        },
                        {
                        name: '刘晓梅',
                        value: 69
                        },
                        {
                        name: '王小菊',
                        value: 26
                        },
                        {
                        name: '刘依琳',
                        value: 44
                        },
                        {
                        name: '谢晓飞',
                        value: 39
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