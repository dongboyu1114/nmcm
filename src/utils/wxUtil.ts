/**
 * 微信小程序授权获取 code
 */
export const getAppletCode = () => {
	return new Promise((resolve, reject) => {
		wx.login({
			success: (res) => {
				if (res.code) {
					// uni.showToast({
					// 	title: res.code,
					// 	icon: 'none'
					// })
					console.log('获取成功', res.code);
					resolve(res.code); // 将 code 传递给 Promise 的 resolve 函数
				} else {
					reject(new Error('登录失败！' + res.errMsg));
				}
			},
			fail: (error) => {
				reject(error);
			}
		});
	});
};