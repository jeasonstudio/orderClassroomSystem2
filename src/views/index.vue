<template>
    <Card :bordered="false" style="height:100%">
        <p slot="title">发起预约</p>

        <i-form :model="formItem" :label-width="60">
            <Form-item label="选择日期">
                <i-select :model.sync="formItem.select" placeholder="请选择">
                    <i-option value="beijing">北京市</i-option>
                    <i-option value="shanghai">上海市</i-option>
                    <i-option value="shenzhen">深圳市</i-option>
                </i-select>
            </Form-item>
            <Form-item label="选择时间">
                <i-select :model.sync="formItem.select" placeholder="请选择">
                    <i-option value="beijing">北京市</i-option>
                    <i-option value="shanghai">上海市</i-option>
                    <i-option value="shenzhen">深圳市</i-option>
                </i-select>
            </Form-item>
            <Form-item label="选择教室">
                <i-select :model.sync="formItem.select" placeholder="请选择">
                    <i-option value="beijing">北京市</i-option>
                    <i-option value="shanghai">上海市</i-option>
                    <i-option value="shenzhen">深圳市</i-option>
                </i-select>
            </Form-item>

            <Form-item label="预约备注">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary">提交</i-button>
                <i-button type="ghost" style="margin-left: 8px">取消</i-button>
            </Form-item>
        </i-form>
    </Card>
</template>

<script>
    export default {
        data() {
            return {
                formItem: {
                    select: '',
                    textarea: ''
                }
            };
        }, ready() {

        }, beforeDestroy() { }, methods: {

        }, components: {}
    };

</script>

<style>

</style>