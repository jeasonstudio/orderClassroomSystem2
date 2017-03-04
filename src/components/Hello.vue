<template>
	<mt-button type="primary" @click.native="open2">default</mt-button>
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
					message: '成功',
					type: 'success'
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
