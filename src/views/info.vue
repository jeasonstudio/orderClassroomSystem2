<template>
    <Card :bordered="false" v-for="item in manageOrders">

    </Card>
</template>

<script>
    export default {
        data() {
            return {

            };
        }, ready() {

        }, beforeDestroy() { }, methods: {

        }, components: {

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
    .useStatus {
        color: #fff;
        background-color: #FF0000;
    }
    
    .buttonBox {
        margin: 10px 0;
    }
</style>