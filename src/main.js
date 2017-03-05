// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import $ from 'jquery'

import './assets/default.css'
import './assets/demo3.css'
import './assets/demo_styles.css'
import './assets/main.css'
import './assets/normalize.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	// template: '<App/>',
	// components: {
	// 	App
	// }
	render: h => h(App)
})
