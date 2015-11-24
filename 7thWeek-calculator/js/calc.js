window.onload = function() {
	var calculate = "";
	var outcome = document.getElementById("screen-1");
	var theScreen = document.getElementById("screen-2");
	var flag = 0;
	   //标记是否已经执行过等号运算
	   //0---没有
	   //1---有

	//initial

	//set the function of each button
	document.getElementById("b-9").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "9";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-8").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "8";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-7").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "7";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-6").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "6";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-5").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "5";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-4").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "4";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-3").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "3";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-2").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "2";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-1").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "1";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("b-0").onclick = function() {
		if (flag == 1) {
			calculate = "";
			flag = 0;
		}
		calculate = calculate + "0";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("plus").onclick = function() {
		flag = 0;
		if (calculate[calculate.length-1] != "+" &&
			calculate[calculate.length-1] != "-" &&
			calculate[calculate.length-1] != "*" &&
			calculate[calculate.length-1] != "/") {
			calculate = calculate + "+";
		}
		theScreen.innerHTML = calculate;
	};
	document.getElementById("minus").onclick = function() {
		flag = 0;
		if (calculate[calculate.length-1] != "+" &&
			calculate[calculate.length-1] != "-" &&
			calculate[calculate.length-1] != "*" &&
			calculate[calculate.length-1] != "/") {
			calculate = calculate + "-";
		}

		theScreen.innerHTML = calculate;
	};
	document.getElementById("multiply").onclick = function() {
		flag = 0;
		if (calculate[calculate.length-1] != "+" &&
			calculate[calculate.length-1] != "-" &&
			calculate[calculate.length-1] != "*" &&
			calculate[calculate.length-1] != "/") {
			calculate = calculate + "*";
		}
		theScreen.innerHTML = calculate;
	};
	document.getElementById("dot").onclick = function() {
		flag = 0;
		
		calculate = calculate + ".";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("delete").onclick = function() {
		calculate = theScreen.innerHTML + "";
		calculate = calculate.slice(0, calculate.length-1);
		theScreen.innerHTML = calculate;
	};
	document.getElementById("divide").onclick = function() {
		flag = 0;
		if (calculate[calculate.length-1] != "+" &&
			calculate[calculate.length-1] != "-" &&
			calculate[calculate.length-1] != "*" &&
			calculate[calculate.length-1] != "/") {
			calculate = calculate + "/";
		}
		theScreen.innerHTML = calculate;
	};
	document.getElementById("left-par").onclick = function() {
		flag = 0;
		
		calculate = calculate + "(";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("right-par").onclick = function() {
		flag = 0;
		
		calculate = calculate + ")";
		theScreen.innerHTML = calculate;
	};
	document.getElementById("clear").onclick = function() {
		calculate = "";
		theScreen.innerHTML = "请输入运算式";
		outcome.innerHTML = "0";
		flag = 1;
	};
	document.getElementById("equal").onclick = function() {

		//检查是否出现 // 或者 /*  --  */ 这两种情况
		if (calculate[0] == "/" || (calculate[1] == "/" && calculate[2] == "0")) {
			alert("输入不合规范，请检查!");
			theScreen.innerHTML = "请输入运算式";
			calculate = "";
		} else {
			//检查运算式是否可以运行
			try {
				calculate = eval(calculate);
			} catch(err) {
				alert("输入有误，请检查!\n\n" + "错误类型：" + err.messages + "\n\n");
				calculate = "";
				theScreen.innerHTML = "请输入运算式";
			}
			for (var i = 0; i < calculate.length-1; i++) {
				if (calculate[i] == "/" && calculate[i+1] == "0") {
					alert("输入有误，请检查!");
					theScreen.innerHTML = "请输入运算式";
					calculate = "";
				}
				alert("10");
			}
			//检查运算结果是否合理
			if (calculate == undefined || isNaN(calculate) ||
			 calculate == Infinity || isNaN(parseFloat(calculate))) {
				alert("输入有误，请检查!");
				theScreen.innerHTML = "请输入运算式";
				calculate = "";
			}
			//

		}
		// 综合处理运算过后的显示问题
		outcome.innerHTML = calculate;
		flag = 1;  //标记已执行了运算
	};
}
