//trim方法,清除前后空格
$.trim("  dasnfia a");

//map方法，遍历
$.map([4,2,0,9],function(item, index){
	console.log(item,index);
});

//isArray,判断是否是数组，返回值true是数组，false不是数组
$.isArray([1,2,3]);

//contains方法，判断参数二的dom节点是否是参数一dom节点内
console.log($.contains(document.body,$("p")[0]));

//编写工具
$.extend({
	max :function(a,b){
		return Math.max(a,b);
	},
	toStarryTel : function(tel){      //将手机号中建几个数变成*
		tel =tel + "";
		var len = tel.length;
		return tel.substring(0,3)+ function(){
			var i = 0,
				temp = "";
			while(i < len - 7){
				temp +="*";
				i++;
			}
			return temp;
		}() + tel.substring(len-4);
	},
	/*Name : function(name){
		var $input = $("input");
		$input.keyup(function(){
			var re = /^[0-9]+.?[0-9]*$/,
				value = $input.value;
			if(!re.test(value)){
				$input.css("outline-color", "red");
			}else{
				console.log(999)
			}
		});
	}*/
	validateUser : function(str){
		var a = ["a","b","c","d", "e","f","g","h","i","j","k","m","l","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var i = 0,
			aLen = a.length;
		while(i < aLen){
			a.push(a[i++].toUpperCase());
		}
		a = a.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
		var j = 0,
			strLen = str.length;
		while(j < strLen){
			if(!~a.indexOf(str[j++])){
				return 0; 
			}
		}
		return 1;
	}

});                                     
console.log($.max(10,20));
console.log($.toStarryTel(15645619749));
/*console.log($.Name());*/
/*$("input").keyup(function(){
	if(!this.value){
		$(this).css("outline-color", "");
		return;
	}
	$(this).css("outline-color", $.validateUser(this.value) ? "green" : "red");
});*/




//插件 $.fn.extend
$.fn.extend({
	validateUser : function(){
		console.log(this);
		//对象的validate属性被调用，下一行的this自然就指向的是调用属性的对象
		return this.keyup(function(){
			//因为这是事件的处理方法，所以this指向的是事件的触发者
			if(!this.value){
				//以$()包装this为了执行后的返回值能去调用$,fn上的其他方法
				$(this).css("outline-color", "");
				return;
			}
			//$.validateUser调用的是预先在$.exdtend中添加的validateUser工具
			$(this).css("outline-color", $.validateUser(this.value) ? "green" : "red");	
		});
	}
});
$("input").validateUser().css({
	width : "400px",
	height : "40px",
	fontSize : "24px"
});







//拓展对象字面量
console.log($.extend({
	a : 1
}, {
	b : 2,
	c : 3
}));

console.log(Object.assign({
	a : 1
}, {
	b : 2,
	c : 3
}));


//同名工具（属性）会覆盖,甚至会重写jq自带的工具
$.extend({
	max : function(a,b){
		return Math.min(a, b);
	},
	trim : 1
});
console.log($.max(1,2));
console.log($.trim);

$.abc = function(){
	console.log(this.trim);
};
$.abc();

$.map = 2;
console.log($.map);

//补充fill方法
console.log(new Array(5).fill("*").join(""));

//补充repeat
console.log("*".repeat(5));

//$.fn.extend方法，this指向！！！！！
$.fn.extend({
	getHTML : function(){
		return this.html();
	},
	setHTML : function(html){
		this.html(html);
	}
});
/*$("body").setHTML("<p>hahaha</p>");
console.log($("body").getHTML());*/


//prototype是原型 