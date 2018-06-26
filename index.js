var lampen = [1, 2, 3, 4, 5]
var rood = document.getElementById("rood")
var groen = document.getElementById("groen")
var oranje = document.getElementById("oranje")
var gewicht = document.getElementById("gewicht")
var lengte = document.getElementById("lengte")
var leeftijd = document.getElementById("gerbootejaartal")
var genereer = document.getElementById("genereer")
rood.addEventListener("click", veranderRood);
groen.addEventListener("click", veranderGroen);
oranje.addEventListener("click", veranderOranje);
genereer.addEventListener("click", berekenBMI);

function veranderRood(){
	for (var i = 0; i < lampen.length; i++) {
		sendRequest(lampen[i],'{"hue": 0, "bri": 80	}');
	}
}

function veranderGroen(){
	for (var i = 0; i < lampen.length; i++) {
		sendRequest(lampen[i],'{"hue": 30000, "bri": 80	}');
	}
}
function veranderOranje(){
	for (var i = 0; i < lampen.length; i++) {
		sendRequest(lampen[i],'{"hue": 7000, "bri": 80	}');
	}
}
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

// var persoonlijkeinformatie = document.getElementById("info");
// alert(document.getElementsByClassName("input")[x].value);
// 	console.log("info is opgeslagen");


//function berekenBMI(){
// 	console.log("request");
// gewicht.value;
// lengte.value;
// leeftijd.value;
// //	if (bmi < 18)
// //		se
