<template>
    <div class="container-fuild">
        <div class="row font-set">
            <div class="col-md-3 col-sm-3">
                <h5 class="single-set">在线：</h5>
            </div>
            <div class="col-md col-sm">
                <h5>3</h5>
            </div>
            <div class="col-md col-sm">
                <h5>2</h5>
            </div>
            <div class="col-md col-sm">
                <h5>4</h5>
            </div>
            <div class="col-md col-sm">
                <h5>人</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 body-set">
                <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
                <img src="">
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"MainCenter",
        data(){
            return{
                config:{
                    points: [
                        {
                            name: '郑州',
                            coordinate: [0.48, 0.65],
                            halo: {
                                show: true,
                            },
                            icon: {
                                src: './static/mapCenterPoint.png',
                                width: 30,
                                height: 30
                            },
                            text: {
                                show: false
                            }
                        },
                        {
                            name: '新乡',
                            coordinate: [0.52, 0.83]
                        },
                        {
                            name: '焦作',
                            coordinate: [0.43, 0.79]
                        },
                        {
                            name: '开封',
                            coordinate: [0.59, 0.4]
                        },
                        {
                            name: '许昌',
                            coordinate: [0.53, 0.47]
                        },
                        {
                            name: '平顶山',
                            coordinate: [0.45, 0.54]
                        },
                        {
                            name: '洛阳',
                            coordinate: [0.36, 0.38]
                        },
                        {
                            name: '周口',
                            coordinate: [0.62, 0.55]
                        },
                        {
                            name: '漯河',
                            coordinate: [0.56, 0.56]
                        },
                        {
                            name: '南阳',
                            coordinate: [0.37, 0.66]
                        },
                        {
                            name: '信阳',
                            coordinate: [0.65, 0.81]
                        },
                        {
                            name: '驻马店',
                            coordinate: [0.55, 0.67]
                        },
                        {
                            name: '济源',
                            coordinate: [0.37, 0.49]
                        },
                        {
                            name: '三门峡',
                            coordinate: [0.20, 0.36]
                        },
                        {
                            name: '商丘',
                            coordinate: [0.76, 0.31]
                        },
                        {
                            name: '鹤壁',
                            coordinate: [0.59, 0.58]
                        },
                        {
                            name: '濮阳',
                            coordinate: [0.68, 0.57]
                        },
                        {
                            name: '安阳',
                            coordinate: [0.59, 0.50]
                        }
                    ],
                    lines: [
                        {
                        source: '新乡',
                        target: '郑州'
                        },
                        {
                        source: '焦作',
                        target: '郑州'
                        },
                        {
                        source: '开封',
                        target: '郑州'
                        },
                        {
                        source: '许昌',
                        target: '郑州'
                        },
                        {
                        source: '平顶山',
                        target: '郑州'
                        },
                        {
                        source: '洛阳',
                        target: '郑州'
                        },
                        {
                        source: '周口',
                        target: '郑州'
                        },
                        {
                        source: '漯河',
                        target: '郑州'
                        },
                        {
                        source: '南阳',
                        target: '郑州'
                        },
                        {
                        source: '信阳',
                        target: '郑州'
                        },
                        {
                        source: '驻马店',
                        target: '郑州'
                        },
                        {
                        source: '济源',
                        target: '郑州'
                        },
                        {
                        source: '三门峡',
                        target: '郑州'
                        },
                        {
                        source: '商丘',
                        target: '郑州'
                        },
                        {
                        source: '鹤壁',
                        target: '郑州'
                        },
                        {
                        source: '濮阳',
                        target: '郑州'
                        },
                        {
                        source: '安阳',
                        target: '郑州'
                        }
                    ],
                    icon: {
                        show: true,
                        src: './static/mapPoint.png'
                    },
                    text: {
                        show: true,
                    },
                    k: 0.5,
                    bgImgSrc: './static/map.png'
                }
            }
        }
    }
</script>


<style scoped>
    .col-md-3{
        border: 1px black solid;
    }
    .col-md{
        border: 1px black solid;
    }
    .font-set{
        color: white;
    }

    h5{
        font-size: 20px;
        margin-left: calc(50% - 10px);
        margin-top: auto;
        margin-bottom: auto;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .single-set{
        font-size: 20px;
        margin-left: calc(50% - 30px);
        font-family: '幼圆';
    }
    .col-md{
        background-image: url(../../../assets/main-view/count.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .col-md-3{
        background-image: url(../../../assets/main-view/count.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .body-set{
        height: 400px;
        margin-top: 70px;
    }
</style>