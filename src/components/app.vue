<template>
    <div class="blue-header"></div>
    <div id="app">
        <header>
            <Menu mode="horizontal" theme="primary" :active-key.sync="akey">
                <div class="logo">
                    <Icon type="android-globe" size="22"></Icon>
                    <!--<Icon type="android-radio-button-on" size="22"></Icon>-->
                    <span class="logo_text" v-if="widthShow">&nbsp;机电楼教室预约系统</span>
                    <span class="logo_text_blod" v-if="!widthShow">&nbsp;OCS</span>
                </div>
                <Menu-item key="4" v-link="{path: '/user'}">
                    <Icon type="person" size="22"></Icon>
                    <span v-if="widthShow">个人中心</span>
                </Menu-item>
                <Menu-item key="3" v-link="{path: '/info'}">
                    <Icon type="ios-paper" size="22"></Icon>
                    <span v-if="widthShow">使用须知</span>
                </Menu-item>
                <Menu-item key="2" v-link="{path: '/manage'}">
                    <Icon type="ios-keypad" size="22"></Icon>
                    <span v-if="widthShow">查看往期</span>
                </Menu-item>
                <Menu-item key="1" v-link="{path: '/index'}">
                    <Icon type="plus-circled" size="22"></Icon>
                    <span v-if="widthShow">发起预约</span>
                </Menu-item>
            </Menu>
        </header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>

</template>

<script>
    import '../styles/common.css'

    export default {
        data() {
            return {
                akey: '1',
                widthShow: true
            };
        }, ready() {
            let pageWidth = document.body.clientWidth
            if (pageWidth <= 950) {
                // console.log(pageWidth)
                this.widthShow = false
            }
        }, beforeDestroy() {

        }, methods: {
            
        }, components: { }
    };

</script>

<style>
    .blue-header {
        display: block;
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: #39f;
        box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    }
    
    #app {
        width: 100%;
        color: #2c3e50;
        background-color: #39f;
        max-width: 1024px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
        position: fixed;
        top: 0;
    }
    
    #app a {
        color: #42b983;
        text-decoration: none;
    }
    
    header {
        display: flex;
        width: 100%;
        header: 50px;
        flex-flow: row nowrap;
        justify-content: space-between;
        /*box-shadow: 0 5px 5px rgba(0, 0, 0, .2);*/
    }
    
    .ivu-menu-horizontal {
        height: 50px!important;
        line-height: 50px!important;
    }
    
    .ivu-menu-item {
        float: right!important;
        padding: 0 4%!important;
    }
    
    .logo {
        margin-left: 20px;
        color: #fff;
        float: left;
        display: inline-block;
        font-size: 22px;
    }

    .logo_text_blod {
        font-weight: 900;
    }

    .container {
        width: 100%;
        height: 100%;
        max-width: 1024px;
        padding: 70px 15px 15px 15px;
        background-color: #eee;
    }
</style>