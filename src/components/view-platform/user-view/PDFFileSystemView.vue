<template>
    <div class="container-fluid" style="padding: 0%; overflow: hidden;">
        <div class="row">
            <div class="col-md-12">
                <user-top-navigation></user-top-navigation>
            </div>
        </div>
        <div class="row">
            <div class="container-fluid botton-bar" v-if="!hiddenBottonBar" :style="BottonBarWidth">
                <div class="row">
                    <div class="col-md-10 navigation" v-show="!hiddenNavigation">
                        <user-navigation></user-navigation>
                    </div>
                    <div class="col-md bar">
                        <user-button-bar @changeButtonBar="changeButtonBar" @changeBody="changeBody" @changeNavigation="changeNavigation"></user-button-bar>
                    </div>
                </div>
            </div>
            <div class="body" :style="BodyWidth" :key="ChangeCount" ref="Body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <user-pdf-file-system-top></user-pdf-file-system-top>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <user-pdf-file-system-body></user-pdf-file-system-body>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name:"FileSystemView",
        data:function(){
            return {
                ChangeCount:0,
                hiddenNavigation:false,
                hiddenBottonBar:false,
                BodyWidth:"width:85%;",
                BottonBarWidth:"width:15%", 
            }
        },
        methods:{
            changeBody(BodyWidth){
                this.ChangeCount ++;
                this.BodyWidth = BodyWidth;
            },
            changeButtonBar(BottonBarWidth){
                this.BottonBarWidth = BottonBarWidth;
            },
            changeNavigation(isHidden){
                this.hiddenNavigation = isHidden;
            },
            changeBodyContainer(){
                this.ChangeCount ++;
                this.BodyWidth = "width:100%;";
                this.hiddenBottonBar = true;
            }
        },
        mounted(){
            if(document.body.scrollWidth <= 1152){
                this.changeBodyContainer();
            }
        }
    }
</script>


<style scoped>
    .botton-bar{
        background-color: black;
    }

    .body{
        background-image: url(../../../assets/main-view/background.png);
        background-repeat: repeat;
        background-size: 100% 100%;
    }

    .navigation,.bar{
        padding: 0% 0%;
    }

</style>