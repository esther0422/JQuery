//普通事件
$("a").click(function(){
	console.log(123);
});
$("li:nth-child(even)").mouseenter(function(){
	console.log("enter even"); //偶数
}).next().mouseenter(function(){
	console.log("enter odd");
});
/*$("li:nth-child(odd)").mouseenter(function(){
	console.log("enter odd");  //奇数
});*/



/*$(window).scroll(function(){
	console.log("scroll");
}).resize(function(){
	console.log("resize");
}).click(function(){
	$(document.body).css("background-color", "red");
}).click(function(){     //事件重载，多次添加都会触发
	console.log("click");
});*/




//重写事件-----原生js
/*onclick = function(){
	console.log(123);
};
onclick = function(){
	console.log(321);
};*/



//事件是可以重载的 -----监听事件
/*window.addEventListener("click", function(){
	console.log(123)
}, 0);
window.addEventListener("click", function(){
	console.log(321)
}, 0);*/


//on事件,也是重载
$("p").on("click", function(){
	console.log(123);
}).on("click", function(){
	console.log(321);
}).on("click", function(){
	console.log(this.innerHTML, $(this).html());//打印该标签的所有内容
});


//！！！后添加到页面里的元素
//是不会拥有前面添加过的对应事件监听！！！！
$("body").append("<p>666</p>");

setTimeout(function(){
	/*$("body").append("<a>哈哈</a>");
	$("a").click(function(){
		console.log($(this).text()); //打印自己内部的文本
	});*/
	$("<a>555</a>").click(function(){
		console.log($(this).text());
	}).appendTo("body");
}, 200);


//事件代理，就算是后面添加的标签页可以用
//只能被父级或父级的父级以及以上的代理，兄弟和子级不能代理
$("body").delegate("a", "click", function(){
	//this指向触发事件的这个标签的dom对象
	console.log($(this).html() + 1);
});


//触发一次,移除时只移除被触发过的这个标签上的事件，不会全部移除
$(".c").one("click", function(){
	console.log($(this).text());
});