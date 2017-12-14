//底部webview：主webview： main.html。其他为负。
//子wv在父wv之上
//所有的wv刚创建时都是占全屏的。

//初始化
mui.init();

//创建webview

mui.plusReady(function(){
	var parentWv = plus.webview.currentWebview();
	var pageList = [
		{
			url:'../message/message.html',
			id:'message'
		},{
			url:'../discover/discover.html',
			id:'discover'
		},{
			url:'../mine/mine.html',
			id:'mine'
		},{
			url:'../address-book/address-book.html',
			id:'address-book'
		}
	];
	
	for(var i=0,l=pageList.length;i<l;i++){
		var url = pageList[i].url;
		var id  = pageList[i].id;
		if(plus.webview.getWebviewById(id)){
			continue	
		}
		var newWv = plus.webview.create(url,id,{
			bottom 		: '50px',
			top	  		: '0px',
			popGesture 	: 'none'
		});
		
		//设置wv的显示状态
		i===0?newWv.show():newWv.hide();
		
		//把子webview追加到父webview。
		parentWv.append(newWv);
	}

	var showWv = 'message';
	mui('.mui-bar').on('tap','.mui-tab-item',function(){
		//mui.alert(this.dataset.id);
		var newWv = this.dataset.id
		if(showWv ===newWv) return;
		plus.webview.getWebviewById(showWv).hide();
		
		var willShowWv = plus.webview.getWebviewById(newWv)
		willShowWv.show('none',0,function(){
			//出发通讯录页面的showpage事件
			mui.fire(willShowWv,'showpage'); //1参数：出发哪个webview；2参：wv的什么事件。
		});
		
		showWv = newWv;
	})
})
