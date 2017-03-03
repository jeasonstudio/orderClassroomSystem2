<template>
	<el-button type="primary" :plain="true" @click="open2">成功</el-button>
</template>

<script>
	export default {
		data () {
				return {
			}
		},
		methods: {
			open2() {
				this.$message({
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
