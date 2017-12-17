mui.init();

mui.plusReady(function(){
	//创建扫码控件
	var scan = new plus.barcode.Barcode('bcode',[
		plus.barcode.QR,plus.barcode.AZTEC
	],{
		framColor:#399a0e;
		scanbarColor:#399a0e;
	});
	
	//开始扫描
	scan.start();
	//扫码成功后返回给我们文本结果
	scan.onmarked=function(type,code,file){
		
	}

})