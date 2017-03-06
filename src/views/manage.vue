<template>
    <Card :bordered="false" v-for="item in manageOrders" style="margin-bottom: 15px;">
        <p slot="title">
            <span>{{ item.date | formatDate }}</span>
            <span v-if="useStatus == '1'">已使用</span>
            <span></span>
        </p>
        <p>预约时间： {{item.date | formatDate}} &nbsp; {{ item.time.time_info }}</p>
        <p>预约教室： 机电楼 {{item.classroom.room_num}}</p>
        <p>事由说明： {{item.reason}}</p>
        <p>老师反馈： {{ item.feedback || '无'}}</p>
        <div class="buttonBox">
            <i-button type="primary" @click="showQRCode(item)">查看二维码</i-button>
            <i-button type="ghost" @click="cancelOrder(item)" style="margin-left: 8px">取消预约</i-button>
        </div>
    </Card>
    <Modal :visible.sync="qrcode" :closable="false" cancel-text="">
        <div class="innerModal">
            <p style="display:block;text-align:center;color:#999;font-size:12px;">截图或长按保存</p>
            <img :src="modalItem.result_url" class="myQrcode" alt="qrcode">
            <p style="margin-left: 30px;">教室：机电楼 {{modalItem.classroom.room_num}}</p>
            <p style="margin-left: 30px;">时间： {{modalItem.date | formatDate}} &nbsp; {{ modalItem.time.time_info }}</p>
        </div>
    </Modal>
</template>

<script>
    export default {
        data() {
            return {
                qrcode: false,
                modalItem: {
                    classroom: '',
                    result_url: '',
                    date: '',
                    time: ''
                },
                manageOrders: [{
                    "id": "1366", "username": "41524120", "date_id": "0", "date": "2016-12-18", "time_id": "5", "classroom_id": "2", "status":
                    "1", "reason": "\u73ed\u4f1a", "commit_time": "1481765119", "handle_time": "1481767559", "feedback": "", "result_url": "http:\/\/scce.kalen25115.cn\/qrcode\/F80B67EA-6317-2F51-E7C8-B120AA312A43.png",
                    "classroom": { "id": "2", "room_num": "315" }, "time": { "id": "5", "time_info": "17:10-18:45" }
                }, {
                    "id": "1344",
                    "username": "41524120",
                    "date_id": "2",
                    "date": "2016-12-13",
                    "time_id": "6",
                    "classroom_id": "3",
                    "status": "1",
                    "reason": "\u8bb2\u8bfe",
                    "commit_time": "1481555817",
                    "handle_time": "1481583026",
                    "feedback": "",
                    "result_url": "http://scce.kalen25115.cn/qrcode/FEE329A9-8061-2CD8-F6CC-7855626EB350.png",
                    "classroom": { "id": "3", "room_num": "415" },
                    "time": { "id": "6", "time_info": "19:30-21:05" }
                }]
            };
        }, ready() {

        }, beforeDestroy() { }, methods: {
            showQRCode: function (tagObj) {
                console.log(tagObj)
                this.qrcode = true
                this.modalItem = tagObj
            },
            cancelOrder: function (tagObj) {
                console.log(tagObj)
            }
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

<style lang="sass">
    .useStatus {
        color: #fff;
        background-color: #FF0000;
    }
    
    .buttonBox {
        margin: 10px 0;
    }
    
    .myQrcode {
        margin: 0;
        width: 100%;
        height: auto;
        display: block;
        text-align: center;
    }
</style>