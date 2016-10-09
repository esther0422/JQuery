$("body").prepend("<div class=\"test\"></div>");

//fadeOut渐渐消失,参数接受动画时间（单位：毫秒）或fast/slow
$(".test").fadeOut();

//fadeIn渐渐出现
$(".test").fadeIn();

//slideUp向上收起
$(".test").slideUp();

//slideDown 向下伸展
$(".test").slideDown();

//delay动画延迟,参数接受动画延迟的时间，只能放在动画链中
$(".test").fadeOut().delay(1000).fadeIn();

//animate自定义动画，第二个参数接受动画的时间
//属性只能添加线性的属性
$(".test").after("<div class=\"demo\"></div>");
$(".demo").css("backgroundColor", "pink").animate({
	width : "400px",
	height : "200px",
	/*backgroundColor : "pink"*/  //不是线性的效果不能添加
}, 2000).delay(1000).slideUp();

$.ajax({
	type : "post",
	url : "http://www.ikindness.cn/api/test/post",
	data : {
		a : 1
	},
	success : function(data){
		console.log(data);
	}
});