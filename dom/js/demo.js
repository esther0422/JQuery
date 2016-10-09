//html方法,类似innerHTML,
console.log($("body").html());//获取
$("body").html("666");//设置


//text 方法，类似innerText
console.log($("body").text());// 获取
console.log($("body").text("<p>66666233333</p>")); //设置

//append方法,向子级的最后添加文本或字符串形式标签或dom，appendChild只能添加标签
$("body").append("&lt;a&gt;hahaha&lt;/a&gt;");//添加字符 &lt; &gt;

//appendTo 方法， append 方法的被动形式
$("<b>6666666</b>").appendTo("html body");

// prepend方法,向子级的最前添加文本或标签或dom
$("body").prepend("<cf>233</cf>").prepend("hahahah");

//prepengTo, prepend方法的被动形式
$("<cf>6666</cf>").prependTo("body");

//after,为被选中的每一个标签后添加一个标签或文本或dom 
$("cf").after("after");

//before, 为被选中的每一个标签前添加一个标签或文本 或dom
$("cf").before("before");

//如果第二个参数传入整个jQ选择器，则会剪切这个标签，粘贴到每一个目标标签中
//所有的jq对dom操作的方法都拥有此特性
$("cf").append($("b"));

$("a").append($("cf"));

$("body").prepend(document.createElement("ul"));

console.log($(document.body).text());


//clone,创建一份拷贝
$("body").append($("ul").clone());

//删除标签,先选中要删除的标签内部及自身，remove()后面不接收参数
/*$("a b").remove();*/

//清空标签,清空该标签的内部的所有标签
/*$("body").empty();*/

