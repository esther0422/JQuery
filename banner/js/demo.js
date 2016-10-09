$.fn.extend({
	banner1 : function(){
		var $arrImas = this.find(".banner1 a"),
			len = $arrImas.length;
		this._tab($arrImas, len);
		/*var i = 0;
		while(i < $arrImas.length){
			console.log($arrImas.eq(i++).index()); //.index()方法可以看到下标，在同一父级下排行第几
		}*/
	},
	banner2 : function(option){
		var _this = this;
		console.log(_this)
		$.map(option, function(item){
			console.log(item); 
			$("<a></a>").appendTo(_this).css("background-image", "url(" + item + ")");
		});
		this._tab(this.find("a"), option.length);
	},
	_setCurrent : function(imgs, index){
		imgs.eq(index).addClass("current").siblings().removeClass("current");
	},
	_tab : function(imgs, len){
		var index = 0,
			_this = this;
		this._setCurrent(imgs, index);
		setInterval(function(){
			index = index > len - 2 ? 0 : index + 1;
			_this._setCurrent(imgs, index);
		}, 2000);
	}
});
//数据和标签已由服务端模板渲染好
$(".banner1").banner1();
//数据由前端渲染至页面（前后端分离）
$(".banner2").banner2(["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg"]);
