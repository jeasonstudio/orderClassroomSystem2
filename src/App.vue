<template>
	<el-row id="app" type="flex" align="top">
		<mt-header class="apple-header" fixed title="ocs-机电楼教室预约"></mt-header>
		<!-- Demo Navigation -->
        <router-view></router-view>
		
		<section id="part1">

		</section>
		<section id="part2">

		</section>
		<section id="part3">

		</section>
		<section id="part4">

		</section>
		<footer>
			<footer-view></footer-view>
		</footer>
	</el-row>

</template>

<script>
	import footerView from './components/Footer.vue'
	import { Header } from 'mint-ui';
	
	
	export default {
		name: 'app',
		components: {
			footerView
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

	.mint-header {
		box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
	}

</style>
