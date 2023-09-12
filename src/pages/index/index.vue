<template>
	<view class="layout">
	</view>
</template>

<script setup>
	import {
		sendAuthCodeToBackend,
		getAllDataFromNami
	} from '@/api/modules/user'
	import {
		store
	} from '@/store'
	import {
		isWeixin
	} from '@/utils/util'
	import {
		getAppletCode
	} from '@/utils/wxUtil'
	import {
		tokenAvailable
	} from '@/utils/userUtil'
	import {
		//onLaunch,
		onLoad
	} from '@dcloudio/uni-app'
	import {
		time
	} from 'console'

	onLoad((options) => {
		// code.value = options?.code || ''
		// console.log(options)
		// alert(code)
		console.log('ccccccccccccccccccccc');
		console.log('111111111111');
		console.log(Date())
		//loginCheckNow()
	})
	// 微信登录处理
	const loginCheckNow = async () => {
		// console.log('登陆检查');
		if (!tokenAvailable()) {
			try {
				const code = await getAppletCode(); // 使用 await 等待 Promise 解析
				console.log('ccccccccccccccccccccc');
				getData(code); // 将 code 传递给 getData 函数
			} catch (error) {
				console.error('获取 code 失败:', error);
			}
		} else {
			uni.redirectTo({ // 使用 uni.redirectTo 来替换页面
				url: '/pages/gift/index'
			})
		}
	}

	// 向后台传递 code
	const getData = async (code) => {
		const param = {
			authAccount: code,
			authType: 'wxMp',
			authPassword: '11111'
		}
		const result = await sendAuthCodeToBackend(param)
		if (result.code == 200) {
			store.commit('SET_TOKEN', result.data.accessToken) // 存储到本地缓存
			if (result.data.loginState == 100) {
				console.log('进入提交节目界面');
				uni.setStorageSync('isLogin', true) // 设置登录状态
				// routerPush()
				const newUrl = '/pages/register/index'; // 新的页面路径
				uni.redirectTo({ // 使用 uni.redirectTo 来替换页面
					url: '/pages/register/index'
				})
			} else {
				console.log('进入登录界面');
				uni.navigateTo({ // 使用 uni.navigateTo 进入登录页面
					url: '/pages/register/index'
				})
			}
		} else {
			uni.showToast({
				title: result.message,
				icon: 'none'
			})
		}
	}
</script>