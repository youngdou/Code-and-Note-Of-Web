window.onload = function() {
	var start = document.getElementById("start");
	var end = document.getElementById("end");
	var door = document.getElementById("door");
	var tips = document.getElementById("tips");

	var flag = 0;
	var i = 0;
	start.onmouseover = function() {
		flag = 0;
		tips.innerHTML = "";

	}
	door.onmouseover = function() {
		flag++;
	}
	end.onmouseover = function() {
		if (flag == 1) {
			tips.innerHTML = "You Win!";
		} 
		else if (flag == 0){
			tips.innerHTML = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
		}
		else if (flag == 2) {
			tips.innerHTML = "Please start the game from the start point";
		}
		flag = 2;
	}

    // 撞墙后的处理
	for (i = 0; i < 5; i++) {
		document.getElementsByClassName("wall")[i].onmouseover = function() {
			tips.innerHTML = "You Lose!";
			flag = 2;
			(function() {
				var acount = i;
				this.className = "block-" + (i+1)+ " wall-t";
			})(i);
		};
	}

	// -------------------these is the functions defined by me-------------------
	// 撞墙后的处理函数
};
