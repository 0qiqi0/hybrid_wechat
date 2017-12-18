mui.init();
		
//引导页面只在第一次展示，第二次打开到登录页和主页。
mui.plusReady(function(){
			
			//在indexhtml判断是否为第一次打开。
			//手动关闭启动页图片
	plus.navigator.closeSplashscreen();
});


mui.ready(function(){
	document.getElementById('start').addEventListener('tap',function(){
		//标记引导页打开过
		plus.storage.setItem('launchFlag','true'); //比locaoStorage.setItem更安全，吴大小限制。
		
		
		//跳转到登录页面
		mui.openWindow({
			url:'../login/login/html',
			id:'login',
			styles:{
					popGesture:'none'  //针对苹果手机左滑到上一个页面
				},
			show:{
				aniShow:'none'
			}
		})
	})
})
			