mui.init();
var loginWv
mui.Layer(function(){
	loginWv = plus.webview.getLaunchWebview();	
},1000)

mui('body').on('tap', '.mui-popover-action li>a', function() {
	var a = this,
		parent;
	//根据点击按钮，反推当前是哪个actionsheet
	for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
		if (parent.classList.contains('mui-popover-action')) {
			break;
		}
	}
	//关闭actionsheet
	mui('#' + parent.id).popover('toggle');
	//alert( "你刚点击了\"" + a.innerHTML + "\"按钮")
	if(a.id==='logout'){
		//退出显示登录界面，清空本地数据。
		localStorage.removeItem('username');
		localStorage.removeItem('sessionToken');
		
		//获取首页登录页面
		loginWv.show();
		
		//销毁其他webview,关闭主界面即可，子界面会随之关闭.none指不加任何动画
		plus.webview.close('main','none');
		plus.webview.close('setting','none');
	}
	
})