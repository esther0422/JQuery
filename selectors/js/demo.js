/*function $(selectors){

}*/


//同querySelectorAll,会返回selector属性
console.log($("li:not(:last-child) + li"));

//选择方法

//eq方法, 索引
console.log($(".l").eq(3)[0]);
console.log($(".l:eq(3)"));   //会返回selector属性
console.log($("ul .l:eq(3)").eq(0).eq(0).eq(0).eq(0).eq(0));

function People(){
	this.walk = function(){
		console.log("walk");
		return this;
	};
	this.run =   function(){
		console.log("run");
		return this;
	};
	this.laugh = function(){
		console.log("laugh");
		return this;
	};
}
console.log(new People().walk().run().laugh().laugh().laugh().laugh().walk());

//find方法 ，查找子级
console.log($("body").find("ul"));

/*
以下方法如果没有筛选条件，则返回所有查找到的结果*/

//children ,查找的是直接子级
console.log($("html").children("ul").children("li"));

//siblings方法, 查找兄弟
console.log($(".c").siblings(/*筛选条件*/));
console.log($(".c").siblings(".d"));

//prev方法，查找前一个标签
console.log($(".b").prev(/*筛选条件*/));

//prevAll ,查找前面所有兄弟标签
console.log($(".c").prevAll(/*筛选条件*/));


//next ,查找后一个兄弟标签
console.log($(".b").next(/*筛选条件*/));

//nextAll ,查找后所有兄弟标签
console.log($(".b").nextAll(/*筛选条件*/));

//parent方法 ，查找当前标签的父级标签
console.log($(".b").parent(/*筛选条件*/));


//综合使用
console.log($("a").next().children().parent().nextAll().eq(2));