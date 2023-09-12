<script setup lang="ts">
	import { onLaunch, onShow, onHide, onLoad } from '@dcloudio/uni-app'
	// 在索引页加入以下代码，打开真机调试
	// onLoad(() => {
	// 	console.log('是微信111111onLoad');
	// 	// 打开调试
	// 	wx.setEnableDebug({
	// 		enableDebug: true
	// 	})

	// })
	onLaunch(() => {
		if (uni.getMenuButtonBoundingClientRect()) {
			console.log('是微信2222');
			uni.navigateTo({ // 使用 uni.navigateTo 进入登录页面
				url: '/pages/index/index'
			})

		} else {
			console.log('是微信111111');
			uni.navigateTo({ // 使用 uni.navigateTo 进入登录页面
				url: '/pages/index/index'
			})
		}
	})
	// onShow(() => {
	// 	console.log('App Show')
	// })
	// onHide(() => {
	// 	console.log('App Hide')
	// })
</script>
<style lang="scss">
	@import 'vk-uview-ui/index.scss';
</style>