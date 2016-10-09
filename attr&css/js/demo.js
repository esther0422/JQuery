//获取属性,如果选择器匹配了多个标签，则只会返回首个被匹配的标签的这个属性
console.log($("meta").attr("charset"));

//设置属性
console.log($("li").attr("name", "test"));
console.log($("li").attr("name"));


/*$("input").attr("readonly", "readonly").attr("disabled", "disabled");
console.log($("input").attr("readonly"));
console.log($("input").attr("disabled"));

$("option:eq(1)").attr("selected", "selected");
console.log($("option:eq(1)").attr("selected"));*/



//prop方法 ,专用处理disabled, resdonly, checked, selected特性
$("option:eq(2)").prop("selected", "selected");//option 该方法不兼容IE
/*$("input").prop("readonly", "readonly");
console.log($("input").prop("readonly"));*/


//css方法
$("div.b").css("border", "1px solid").css("height", "200px");
//设置
$("div.b").css({
	backgroundColor : "red",
	boxShadow : "0 0 20px 10px white inset"
})

//获取
console.log($("div.b").css("boxShadow"));

//添加类，从而添加样式,并不会重复添加同名类
$("p").addClass("blue").addClass("big");

//删除类，从而删除样式
$("p").removeClass("blue");

//切换类,从而切换样式
$("p").toggleClass("blue").toggleClass("blue").toggleClass("blue");

//是否包含类,有返回true,没有false 
console.log($("p").hasClass("big blue"));

$("input")[0].onclick = function(){
	$(this).toggleClass("blue");
	$(this).addClass("add");
	console.log(this); //此时this 是一个dom对象，没有toggleClass
	console.log($(this));//用$()封装后的才能使用toggleClass
}