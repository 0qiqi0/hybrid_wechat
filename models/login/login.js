
mui.init();
//输入账号密码

//点击登录按钮
document.getElementById('login').addEventListener('tap',function(){
	//alert('账号或者密码错误');
	var usernameInput = document.querySelector("input[name='username']");
	var passwordInput = document.querySelector("input[name='password']");
	
	var usernameValue = usernameInput.value;
	var passwordValue = passwordInput.value;
	console.log(usernameValue,passwordValue);
	//非空校验
	if(!usernameValue || !passwordValue){
		mui.toast('用户名或密码不能为空！');
		return
	}
	
	//ajax和服务器交互
	if(usernameValue==='adimn' || passwordValue==='123'){
		//console.info('登录成功，开始跳转页面')
		mui.openWindow('../main/main.html','main')
	} else{
		mui.toast('用户名或密码错误，请重新输入！');
	}
});