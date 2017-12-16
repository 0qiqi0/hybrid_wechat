mui.init();

mui.plusReady(function(){
	//创建扫码控件
	var scan = new plus.barcode.Barcode('bcode',[
		plus.barcode.QR,plus.barcode.AZTEC
	]);
	
	
})