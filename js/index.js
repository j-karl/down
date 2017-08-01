$(function(){
	function is_weixn(){  
	    var ua = navigator.userAgent.toLowerCase();  
	    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
	        return true;  
	    } else {  
	        return false;  
	    }  
	}
	$('.download').on('touchend',function(){
		if (/android/i.test(navigator.userAgent)){
			if (/micromessenger/i.test(navigator.userAgent)){
				alert('android wx');
				document.getElementById("wxalert").style.display="block";
			}else{
				alert('android wangye')
				setTimeout(function(){
					window.location.href="http://www.i618.com.cn/i618/htqf/htqf5714.apk"
				},150);
			}
		}else if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
			if (navigator.userAgent.match(/OS [7-9]_\d[_\d]* like Mac OS X/i)){
				alert('iphone os7-9');
				window.location.href="https://itunes.apple.com/cn/app/hui-tong-qi-fu/id982205587?mt=8"
			}else{
				alert('iphone');
				window.location.href="https://itunes.apple.com/cn/app/hui-tong-qi-fu/id982205587?mt=8"
			}
		}else{
			console.log("暂时没有对应客户端");
			$('.noapp').addClass('active');
		}
	});

	$('.ok').on('touchend',function(){
		setTimeout(function(){
			$('.noapp').removeClass('active');
		},150);
	});

})