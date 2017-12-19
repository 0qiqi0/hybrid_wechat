mui.init();

var Realtime = require('leancloud-realtime').Realtime;
var TextMessage = require('leanCloud-realtime').TextMessage;

var realTime = new Realtime({
	appId: 'asd124',
	region: 'cn',
})

var send = document.getElementById('send');
var more = document.getElementById('more');
var emotion = document.getElementById('emotions');

var mi = document.getElementById('msg-input');

mi.addEventListener('input', function() {
	if (this.value.trim().length > 0) {
		send.style.display = 'block';
		more.style.display = 'none';
		emotion.style.display = 'none';
		console.log(1111, this.value)
	} else {
		send.style.display = '';
		more.style.display = '';
		emotion.style.display = '';
	}
})

document.getElementById('send').addEventListener('tap', function() {
	var msgValue = mi.value;
	//console.info(2222, msgValue)
	var willSendMsg = '<div class="chat-box chat-box-right mui-content-padded">' +
		'<img class ="chat-avatar" src="../../img/tech6.png"/>' +
		'<div class="chat-content">' +
		'<div class="chat-content-inner">' +
		msgValue +
		'</div>' +

		'<div class="chat-content-arrow-right">' +
		'</div>' +
		'</div>' +

		'<div class="clear-box">' +

		'</div>' +
		'</div>';

	var newDom = document.createElement('div');
	newDom.innerHTML = willSendMsg

	var msgList = document.querySelector('.chat-list');
	msgList.appendChild(newDom);

	mi.value = '';

	send.style.display = '';
	more.style.display = '';
	emotion.style.display = '';

	//滚动条到最底部时
	msgList.scrollTop = msgList.scrollHeight - msgList.offsetHeight;

	//开始发送消息
	realtime.createIMClient('Tom').then(function(tom) {
		// 创建对话
		return tom.createConversation({
			members: ['lisi'],
			name: '本机发给对方的'
		})
	}).then(function(conversation) {
		// 发送消息
		return conversation.send(new AV.TextMessage(msgValue));
	}).then(function(message) {
		console.log('发送成功！');
	}).catch(console.error);

})

//监听所有发送过来的消息
realtime.createIMClient('lisi').then(function(res) {
	lisi.on('message', function(message, conversation) {
		//console.log('Message received: ' + message.text);

		var willSendMsg = '<div class="chat-box chat-box-left mui-content-padded">' +
		'<img class ="chat-avatar" src="../../img/'+message.photename+'/>' +
		'<div class="chat-content">' +
		'<div class="chat-content-inner">' +
		message.text +
		'</div>' +

		'<div class="chat-content-arrow-left">' +
		'</div>' +
		'</div>' +

		'<div class="clear-box">' +

		'</div>' +
		'</div>';

	var newDom = document.createElement('div');
	newDom.innerHTML = willSendMsg

	var msgList = document.querySelector('.chat-list');
	msgList.appendChild(newDom);
	
	msgList.scrollTop = msgList.scrollHeight - msgList.offsetHeight;
		
	});
}).catch(console.error);