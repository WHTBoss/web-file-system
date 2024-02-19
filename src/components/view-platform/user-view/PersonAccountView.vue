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
                        <div class="col-md-6">
                            <user-left-person></user-left-person>
                        </div>
                        <div class="col-md-6">
                            <user-right-account></user-right-account>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <user-person-button></user-person-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    export default{
        name:"MessageView",
        data:function(){
            return {
                ChangeCount:0,
                hiddenNavigation:false,
                hiddenBottonBar:false,
                BodyWidth:"width:85%;",
                BottonBarWidth:"width:15%",
                url:"http://192.168.202.144:8100/#/preview?dvId=1745690581479784448" 
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
            // const res = axios.get('http://localhost:10020' + '/account/findAccountByAid?aid=' + window.sessionStorage.getItem("uid"));
            // res.then(Response=>{
            //     window.sessionStorage.setItem("aid",Response.data.obj.aid);
            //     window.sessionStorage.setItem("photo",Response.data.obj.photo);
            //     window.sessionStorage.setItem("mailbox",Response.data.obj.mailbox);
            //     window.sessionStorage.setItem("giteeAccount",Response.data.obj.giteeAccount);
            //     window.sessionStorage.setItem("githubAccount",Response.data.obj.githubAccount);
            //     window.sessionStorage.setItem("qqAccount",Response.data.obj.qqAccount);
            //     console.log('请求成功:');
            //     console.log('请求成功响应对象获取',Response);
            // });
            // res.catch(Error=>{
            //     console.log('请求失败:');
            //     console.log('请求失败响应对象获取',Error);
            // });
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