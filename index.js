var lampen = [1, 2, 3, 4, 5]
var gewicht = document.getElementById("gewicht")
var lengte = document.getElementById("lengte")
var genereer = document.getElementById("genereer")
genereer.addEventListener("click", berekenBMI);

function sendRequest(lamp, body){
	console.log("request komt er aan");
	var http = new XMLHttpRequest();
	http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/" + lamp + "/state");
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200){
		}
	}
	http.send(body);
}

function berekenBMI(){
	console.log("request");
	bmi = gewicht.value / (lengte.value * lengte.value);
	console.log(bmi);

	if (bmi < 18.5){
		 	for (var i = 0; i < lampen.length; i++) {
			sendRequest(lampen[i],'{"hue": 7000, "bri": 80	}');
		}
		alert ("you are underweight! Eat more chocolate! :D");

  }	else if (bmi > 18.5 && bmi < 25.0){
			for (var i = 0; i < lampen.length; i++) {
				sendRequest(lampen[i],'{"hue": 30000, "bri": 80, "on": true	}');
			}
			alert ("You have the right weight! Go on like this!");
	}	else if (bmi > 25.0){
			for (var i = 0; i < lampen.length; i++) {
				sendRequest(lampen[i],'{"hue": 0, "bri": 80, "on": true	}');
			}
			alert ("You are overweight! Go sport some more.");
	} else {
		alert ("You have not entered anything, please enter something.")
		for (var i = 0; i < lampen.length; i++) {
			sendRequest(lampen[i],'{"on": false}');
		}
	}
}
