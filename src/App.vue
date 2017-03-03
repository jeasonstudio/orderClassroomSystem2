<template>
	<el-row id="app" type="flex" align="top">
		<header-view></header-view>
		Hello World
		<router-view></router-view>
		<footer>
			<footer-view></footer-view>
		</footer>
	</el-row>

</template>

<script>
	import footerView from './components/Footer.vue'
	import headerView from './components/Header.vue'
	export default {
		name: 'app',
		components: {
			footerView,
			headerView
		}
	}
</script>

<style lang="css">
	html, body {
		height: 100%;
		margin: 0;
	}

	#app {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 100%;
	}
</style>
