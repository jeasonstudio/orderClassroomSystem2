<template>
    <Alert v-for="item in infoText" :type="item.type" show-icon>
        {{ item.title }}
        <template slot="desc">
            {{ item.content }}
        </template>
    </Alert>
    <footer-view></footer-view>
</template>

<script>
    import footerView from '../views/footer.vue'
    export default {
        data() {
            return {
                infoText: [{
                    type: 'info',
                    title: '新版介绍',
                    content: `OCS-机电楼教室预约系统2.0来啦！新版系统优化了用户体验，在手机上使用更加方便。
                    iPhone用户请在Safari中打开并选择添加到桌面、安卓用户请使用Chrome打开并将其添加到桌面。`
                }, {
                    type: 'success',
                    title: '系统介绍',
                    content: '你可以通过本网站，预约近一周时间的无课教室。如果某个教室没有某个时间段的空闲时间，则无法预约。'
                }, {
                    type: 'warning',
                    title: '使用说明',
                    content: '预约通过之后，请使用者保存生成的二维码，使用前让机电楼管理钥匙的大爷/阿姨扫描一下。'
                }, {
                    type: 'error',
                    title: '声明',
                    content: '注意，二维码只能使用一次。如果已经提交的借教室请求或者已通过但未使用的请求累积超过2条，账号则无法借教室。'
                }]
            };
        }, ready() {

        }, beforeDestroy() { }, methods: {

        }, components: {
            footerView
        },
        filters: {
            formatDate: function (value) {
                let a = value.split('-')
                return a[0] + '年' + a[1] + '月' + a[2] + '日'
            }
        }
    };

</script>

<style>

</style>