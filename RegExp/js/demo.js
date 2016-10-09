//不使用正则  (我的表单排版有错误！！！)
/*$(".project").keyup(function(){*/
	/*while($(this).val().lastIndexOf(" ")>=0){
		$(this).val() = ($(this).val()).replace(" ","");
	}*/
/*	var value = $(this).val();  //"\t" 是制表符
	$(this).parent().next().html(~value.indexOf(" ") || ~value.indexOf("\t") ? "项目名称不能包含空格" : ""); 
});*/

//使用正则表达式
//Regular Expression
//RegExp
//正则表达式的字面量
var reg1 = /a/;

//实例化正则对象
var reg2 = new RegExp("a");

//字符串的正则匹配方法search,里面参数接受正则表达式，
//类似indexOf, 但是参数可接受正则表达式，返回值是正则表达式匹配到的下标
console.log("dhhhasa".search(reg1));

//字符串的replace方法第一个参数也能接受正则表达式，替换被正则匹配到的内容，就替换第一个
console.log("\tcata".replace(reg2,"u"));

//字符串的切割，也能接受正则表达式，根据正则表达式的规则进行字符串的切割
//返回值为该字符的前面内容和后面内容
console.log("\tcat".split(reg2));

//字符串的match方法,返回匹配到的字符串部分的集合
console.log("\tcat".match(reg1));



//正则对象的匹配方法


//test方法去检测字符串是否有匹配到正则表达式,返回值为boolean
console.log(reg1.test("\tcat"));




//正则表达式的规则

console.log(/asdf/.test("asdasdasd"));

//标识符

//i
//ignore case  不区分大小写
console.log(/asdf/i.test("ASdf"));

//g
//即global匹配所有,能查找所有的匹配到的
console.log("asdfasdfasdf".match(/asdf/g));
//可以连用
console.log("asdAsdfasdF".match(/asdf/ig));

//特殊元字符

//\t
//即tab匹配制表符
console.log("asdf	asdfasdf".match(/\t/));

//\r匹配回车符 return
console.log("asdf\rasdfasdf".match(/\r/));

//\n 匹配换行符newline


console.log("----------以下大写的元字符表示对小写的元字符的取反--------");


//\s匹配空格以及制表符以及换行符 space
console.log("as dfas dfas df".match(/\s/g));
console.log("as dfas dfas df".match(/\S/g));

//\d匹配0到9的数字 digit
console.log("-------\\d----------");
console.log("123546sd-=fasd12345f".match(/\d/g));
console.log("4156462sda-=dsa545".match(/\D/g));

//\w匹配0到9的数字以及大小写英文字母及下划线
console.log("-------\\w----------");
console.log("owed_$#2dmsoHNJK".match(/\w/g));
console.log("owed_$#2dmsoHNJK".match(/\W/g));

//\b
//即block匹配单词边界
console.log("internationalization".match(/tion\b/));
console.log("internationalization".match(/tion\B/));

//.
//匹配所有
console.log("bfaib1563ads我f156\r\d\w)$%^".match(/./g));

//\转义需要转义的有 [],(),.,\,/,?,+等等特殊符号
//匹配小括号
console.log("()".match(/\(\)/g));


//中括号规则,表示一个区间，中括号里的表示0或1或2或3
console.log("1563415".match(/[0123]/g));
//-表示子啊这个区间范围内，如：【0-5】，表示0到5
//[a-z]和[A-Z]狗可以使用
//[a-zA-Z]
console.log("1563415".match(/[0-5]/g));

//匹配到里面所有的字母
console.log("asdffsw)bh^(h)nl".match(/[asdf]/g));

console.log("asd1235ffsytr65465w)bh^(h)nl".match(/[\d]/g));

console.log("asd1235ffsytr65465w)bh^(h)nl".match(/[\w]/g));

//加了区间表示，区间内的每一个都要去匹配
console.log("asd12 35ffsytr 65465w)bh^(h)nl".match(/[\w\s]/g));

//注意区别，没有加区间的会当做一个整体在匹配
console.log("asd1235ffsy tr6546 5w)bh^(h)nl".match(/\w\s/g));


//^取反(只能在中括号内才有用)，对中括号内规则的取反
console.log("123sa123".match(/[^\d]/g));
console.log(/[^\d]/g.test("567*sda68"));//检查到不是数字就报错


//数量级
//单独使用时表示数量级尽量多的去匹配，贪婪
//在数量级后添加？一同使用时，表示知足

//*匹配前一个规则任意次,如果这个规则匹配到了0次，也会算作匹配到，返回值为""空字符串,
console.log("u123".match(/\d*/));
console.log("sad456*+-/=45sa".match(/[^\w*]/g));	//放在中括号里的*会被当作特殊字符

//?匹配前一个规则0次或1次
console.log("123".match(/\d?/));
console.log("123".match(/\d??/));

//+ 匹配前一个规则至少一次
console.log("123saed".match(/\d+/));
console.log("123saed".match(/\d+?/));


//{m,n}自定义匹配前一个规则的次数,匹配前一个规则的m次到n次
console.log("121456743dsa456".match(/\d{1,2}/g));
console.log("121456743dsa456".match(/\d{1,2}?/g));
//{m}匹配前一个规则的m次
console.log("121456743dsa456".match(/\d{2}/g));
console.log("121456743dsa456".match(/\d{2}?/g));//没意义
//{m，}匹配前一个规则的至少m次
console.log("121456743dsa456".match(/\d{2,}/g));
console.log("121456743dsa456".match(/\d{2,}?/g));//同{2}
//{0，m}匹配前一个规则的最多m次
console.log("121456743dsa456".match(/\d{0,2}/g));
console.log("121456743dsa456".match(/\d{1,4}?/g));//同{1}

//非中括号里的 ^ 以后面的规则由字符串开始
console.log("123123".match(/^\d/g));
console.log("dsa12".match(/^\d/g));
console.log("123dsaf123".match(/^\d+/));

//$以前面的规则结束
console.log("123123".match(/\d$/));
console.log("123da".match(/\d$/));
console.log("123dsa123a".match(/\d+$/));

//检测手机号
console.log(/^1[^0-2469]\d{9}$/.test("13588191563"));

//身份证
console.log(/^[1-8][1-7]0000[12][09][019][0-9](0[0-9]|1[012])([012][0-9]|30)\d{3}([0-9]|x)$/.test("33000020160402072x"));
console.log(/[123][0-9]/.test("22"));

//身份证校验



// | 或者
console.log("asd1d2d3fasdd5d7dd7".match(/[a-c]|\d/g));
console.log("1990".match(/[0-9]{3}/));
//()表示分组
console.log("asd1d2d3fasdd5d7dd7".match(/(d\d)+/g));

//?:添加到小括号里的开始处可以取消引用，对不必要的小括号引用加上？：可以提高正则表达式的运算效率

//replace方法中，第一个参数如果是正则，有存在分组，则第二个参数可以通过$n使用对应的分组，比如$1找到第一个小括号里匹配到的内容
console.log("asdff1asdf".replace(/(\w\d)/,"$1"));

//正则表达式中使\n可以获取到前面被小括号分组匹配到的内容，比如\1找到第一个小括号里匹配的内容
console.log("asdf123asdf".match(/(asdf)123\1/));
console.log("asdf123asdf".match(/(asdf)123/));

//匹配标签
console.log("<h1 title=asdf>asdfwer</h1>".match(/^<([a-z]+[a-z\d]*)[^>]*>.*<\/\1>$/));

//前瞻
//?=肯定前瞻
//?!否定前瞻
//前瞻判定内的内容不会移动匹配光标
console.log("asdf123asdf".match(/asdf(?=\d)123/));
console.log("asdf123asdf".match(/asdf(?!\d)/));




//使用正则的非空校验（表单里的）
/*$(this).parent().next().html(/\s/.test($(this).val()) ? "不能包含空格" : "" );*/
/*$(".test").keyup(function(){
	var value = $(this).val();
	console.log(value.match(/\w\s/g));
});*/
