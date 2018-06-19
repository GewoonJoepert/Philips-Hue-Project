var lampen = [1, 2, 3, 4, 5]
var rood = document.getElementById("rood")
var groen = document.getElementById("groen")
var oranje = document.getElementById("oranje")
rood.addEventListener("click", veranderRood);
groen.addEventListener("click", veranderGroen);
oranje.addEventListener("click", veranderOranje)

function veranderRood(){
	for (var i = 0; i < lampen.length; i++) {
		sendRequest(lampen[i],'{"hue": 0, "bri": 120	}');
	}
}

function veranderGroen(){
	for (var i = 0; i < lampen.length; i++) {
		sendRequest(lampen[i],'{"hue": 30000, "bri": 120	}');
	}
}
function veranderOranje(){
	for (var i = 0; i < lampen.length; i++) {
		sendRequest(lampen[i],'{"hue": 7000, "bri": 120	}');
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

var persoonlijkeinformatie = document.getElementById("info");
alert(document.getElementsByClassName("input")[x].value);
	console.log("info is opgeslagen");
