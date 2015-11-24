window.onload = function() {
	var clock = 30;
	var clickStop = true;
	var timeStop = false;
	var theScore = 0;
	var oneMole = 0;
	var timer = null;
	var allHoles = document.getElementsByName("mole");

	document.getElementById("start").onclick = function() {
	// 设置开始停止键
	    if (clickStop == false) {
	    	clickStop = true;

	    	document.getElementById("status").innerHTML = "Game Over";

            document.getElementById("startButton").style.backgroundColor = "#61CB91";
            
	    	clearInterval(timer);
	    	alert("Your score is " + theScore);
	    } else {
	    	clickStop = false;

	    	document.getElementById("status").innerHTML = "Playing...";

            document.getElementById("startButton").style.backgroundColor = "#FD5555";
	    }

	    if (clickStop == false) {
	    	runClock();
	    }
	    allHoles[oneMole].style.backgroundColor = "#736353";
	    allHoles[oneMole].style.backgroundImage = "none";
	    theScore = 0;
	    load();
    }

//-----------------------------the functions for the software--------------------------
    function load() {
    	if (clickStop == false && timeStop == false) {
    		oneMole = Math.floor(Math.random() * 60); //生成随机数

    		allHoles[oneMole].style.backgroundColor = "red";
    		allHoles[oneMole].style.backgroundImage = "url(images/mole.png)";
    		for (var i = 0; i < oneMole; i++) {
    			allHoles[i].onclick = function() {
    				theScore--;
    				showScore(theScore);
    			}
    		}
    		allHoles[oneMole].onclick = function() {
    			theScore++;
    			showScore(theScore);

    			allHoles[oneMole].style.backgroundColor = "#736353";
    			allHoles[oneMole].style.backgroundImage = "none";
    			
    			load();
    		}
    		for (var i = oneMole+1; i < 60; i++) {
    			allHoles[i].onclick = function() {
    				theScore--;
    				showScore(theScore);
    			}
    		}
    	}
    }

    function runClock() {
    	timeStop = false;
    	clock = 30;
    	timer = setInterval(function() {
    		if (clock > 0) {
    			clock--;
    			showTime(clock);
    		} else {
    			timeStop = true;
    			alert("Your score is" + theScore);
    			clearInterval(timer);
    		}
    	}, 1000);
    }
    function showTime(leftTime) {
    	document.getElementById("timeLeft").innerHTML = "" + leftTime;
    }
    function showScore(currentScore) {
    	document.getElementById("score").innerHTML = "" + currentScore;
    }
};