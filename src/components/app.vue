<template>
    <div class="blue-header"></div>
    <div id="app">
        <header>
            <Menu mode="horizontal" theme="primary" active-key="1">
                <div class="logo">
                    <Icon type="android-radio-button-on" size="22"></Icon>
                    <span class="logo_text">教室预约</span>
                </div>
                <Menu-item key="1">
                    <Icon type="ios-paper" size="22"></Icon>
                    <span v-if="widthShow">使用须知</span>
                </Menu-item>
                <Menu-item key="2">
                    <Icon type="ios-people" size="22"></Icon>
                    <span v-if="widthShow">查看往期</span>
                </Menu-item>
                <Menu-item key="4">
                    <Icon type="settings" size="22"></Icon>
                    <span v-if="widthShow">发起预约</span>
                </Menu-item>
            </Menu>
        </header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>

    <!--<footer-view></footer-view>-->
</template>

<script>
    import footerView from '../views/footer.vue'
    import '../styles/common.css'
    export default {
        data() {
            return {
                widthShow: true
            };
        }, ready() {
            let pageWidth = document.body.clientWidth
            if (pageWidth <= 600) {
                console.log(pageWidth)
                this.widthShow = false
            }
        }, beforeDestroy() {

        }, methods: {

        }, components: { footerView }
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
    }
    
    .logo {
        margin-left: 20px;
        color: #fff;
        float: left;
        display: inline-block;
        font-size: 22px;
    }

    .container {
        width: 100%;
        height: 100%;
        max-width: 1024px;
        padding: 65px 10px 10px 10px;
        background-color: #eee;
    }
</style>