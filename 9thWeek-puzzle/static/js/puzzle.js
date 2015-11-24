var pieces = new Array();

var space_x = 3;
var space_y = 3;

var flagToWin = false;

var rule = 100;

window.onload = function() {

	for (var t = 0; t < 4; t++) {
		pieces[t] = new Array();
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			pieces[i][j] = document.getElementById("p" + (i+1) + (j+1));
		}
	}

	// 设置游戏难度
	document.getElementById("easy").onclick = function() {
		rule = 30;
	}
	document.getElementById("normal").onclick = function() {
		rule = 200;
	}
	document.getElementById("hard").onclick = function() {
		rule = 600;
	}
	document.getElementById("hardest").onclick = function() {
		rule = 1000;
	}

	// 重新开始
	document.getElementById("origin").onclick = function() {
		location.reload();
	}

	// 开始游戏
	document.getElementById("begin").onclick = function() {
		randomMove(rule);
		flagToWin = true;

		bindMove(space_x, space_y);
	}
};

// 通过模拟拼图的步数设置游戏难度
function randomMove(lessStep) {
	for (var i = 0; i < lessStep; i++) {
		var rand_num = Math.floor(Math.random()*4);
		if (rand_num == 0 && space_x+1 <= 3 && pieces[space_x+1][space_y] != null) {
			moveToTop();
		}
		else if (rand_num == 1 && space_x-1 >= 0 && pieces[space_x-1][space_y] != null) {
			moveToDown();
		}
		else if (rand_num == 2 && space_y+1 <= 3 && pieces[space_x][space_y+1] != null) {
			moveToLeft();
		}
		else if (rand_num == 3 && space_y-1 >= 0 && pieces[space_x][space_y-1] != null) {
			moveToRight();
		}
	}
}

// 给空格附近的拼图绑定事件
function bindMove(space_x, space_y) {

	if (space_x-1 >= 0 && pieces[space_x-1][space_y] != null) {
		pieces[space_x-1][space_y].onclick = moveToDown;
	}

	if (space_x+1 <= 3 && pieces[space_x+1][space_y] != null) {
		pieces[space_x+1][space_y].onclick = moveToTop;
	}

	if (space_y-1 >= 0 && pieces[space_x][space_y-1] != null) {
		pieces[space_x][space_y-1].onclick = moveToRight;
	}

	if (space_y+1 <= 3 && pieces[space_x][space_y+1] != null) {
		pieces[space_x][space_y+1].onclick = moveToLeft;
	}
}

// 给空格上的拼图绑定事件
function moveToDown() {
	(function(x, y) {
		pieces[x-1][y].style.top = (x*102)+"px";
	})(space_x, space_y);
	space_x--;

	clearClick();

	var temp = pieces[space_x+1][space_y];
	pieces[space_x+1][space_y] = pieces[space_x][space_y];
	pieces[space_x][space_y] = temp;

	var Ntemp = pieces[space_x+1][space_y].className;
	pieces[space_x+1][space_y].className = pieces[space_x][space_y].className;
	pieces[space_x][space_y].className = Ntemp;

	if (!ifWin()) {
		bindMove(space_x, space_y);
	}
}
// 给空格下的拼图绑定事件
function moveToTop() {
	(function(x, y) {
		pieces[x+1][y].style.top = (x*102)+"px";
	})(space_x, space_y);
	space_x++;

	clearClick();

	var temp = pieces[space_x-1][space_y];
	pieces[space_x-1][space_y] = pieces[space_x][space_y];
	pieces[space_x][space_y] = temp;

	var Ntemp = pieces[space_x-1][space_y].className;
	pieces[space_x-1][space_y].className = pieces[space_x][space_y].className;
	pieces[space_x][space_y].className = Ntemp;

	if (!ifWin()) {
		bindMove(space_x, space_y);
	}
}
// 给空格左边的拼图绑定事件
function moveToRight() {
	(function(x, y) {
		pieces[x][y-1].style.left = (y*102)+"px";
	})(space_x, space_y);
	space_y--;

	clearClick();

	var temp = pieces[space_x][space_y+1];
	pieces[space_x][space_y+1] = pieces[space_x][space_y];
	pieces[space_x][space_y] = temp;

	var Ntemp = pieces[space_x][space_y+1].className;
	pieces[space_x][space_y+1].className = pieces[space_x][space_y].className;
	pieces[space_x][space_y].className = Ntemp;

	if (!ifWin()) {
		bindMove(space_x, space_y);
	}
}
// 给空格右边的拼图绑定事件
function moveToLeft() {
	(function(x, y) {
		pieces[x][y+1].style.left = (y*102)+"px";
	})(space_x, space_y);
	space_y++;

	clearClick();

	var temp = pieces[space_x][space_y-1];
	pieces[space_x][space_y-1] = pieces[space_x][space_y];
	pieces[space_x][space_y] = temp;

	var Ntemp = pieces[space_x][space_y-1].className;
	pieces[space_x][space_y-1].className = pieces[space_x][space_y].className;
	pieces[space_x][space_y].className = Ntemp;

	if (!ifWin()) {
		bindMove(space_x, space_y);
	}
}

// 清除点击事件
function clearClick() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (pieces[i][j] != null) {
				pieces[i][j].onclick = null;
			}
		}
	}
}

// 判断拼图是否完成
function ifWin() {
	if (flagToWin == true) {
		var allPieces = document.getElementsByTagName("img");

		var start = 0;
		for (var i = 0; i < 15; i++) {
			if (allPieces[i].className != ++start) {
				return false;
			}
		}

		alert("哎呀，被你拼回来了，挑战新的难度吧！\n");
	}
}
