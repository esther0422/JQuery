$.fn.extend({
	code : function(duration){
		var sec = duration,
			_this = this, 
			status = 1;
		this.text("倒计时");
		this.click(function(){
			if(status){
				status = 0;
				var time = setInterval(function(){
					if(sec === 0){
						clearInterval(time);
						status = 1;
					}else{
						_this.text(--sec);
					}
				}, 1000);
			}
		});
	}
});
$(".code").code(60);