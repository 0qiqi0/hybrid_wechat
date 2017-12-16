mui.init();

mui.plusReady(function(){
	//监听移动设备的加速度变化
	var MAX =20;
	var up = document.querySelector('up');
	var down = document.querySelector('down');
	plus.accelerometer.watchAcceleration(function(a){
		var p=null;
		//如果xyz方向上的绝对值之和超过某值，认为用户在摇动
		if(!p &&Math.abs(a.xAxis)+Math.abs(a.yAxis)+Math.abs(a.zAxis) > MAX){
			p = plus.audio.createPlayer('_www/img/shake.mp3');
			p.play(); //开始播放
			setTimeout(function(){
				p.stop();
				p=null
			},2000);
		}
		
		up.style.webkitTransform='translateY(-'+up.offsetHeight /2+'px)';
		down.style.webkitTransform='translateY('+down.offsetHeight /2+'px)';
		
		setTimeout(function(){
			up.style.webkitTransform='';
			down.style.webkitTransform='';
			mui.later(function(){
				mui.toast('正在搜索同一时刻摇晃手机的人')	
			},200)
			
		},700)
	},function(){
		alert('坚挺失败')
	},{
		frequency:1000
	})
})