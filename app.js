var hello = "Hello World";
alert(hello);

// 整数を代入する
var int1 = 1;

// 負数を代入する
var int2 = -10;

// 小数点を代入する
var float1 = 3.14;

// 文字列を代入する
var str1 = "JavaScriptを覚えよう";

// 足し算
alert(4 + 3);

// 引き算
alert(8 - 5);

// 掛け算
alert(2 * 6);

// 割り算
alert(10 / 2);

// 文字列の結合
alert("Hello" + "World");

// 変数を利用しで文字列を結合
var str2 = "Hello";
var str3 = "World";
alert(str2 + str3);


// 条件分岐
var orange = 100;
var apple = 120;

if (orange < apple){
	alert("みかんの値段がリンゴより安い");
}
else if (orange == apple){
	alert("みかんとりんごが同じ値段");
}
else{
	alert("みかんの値段がリンゴより高い");
}

// 引数の条件がtrueの間、{}内の処理が繰り返される
var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert("2をかけ続けて" + max + "を越えるのに必要だった回数は" + count + "回です");

// do...while文

// for文
var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}

alert("1から10まで足し算した結果は" + num + "です");
