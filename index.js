var lampen = [1, 2, 3, 4, 5]
var rood = document.getElementById("rood")
var groen = document.getElementById("groen")
var oranje = document.getElementById("oranje")
rood.addEventListener("click", veranderRood);
groen.addEventListener("click", veranderGroen);
oranje.addEventListener("click", veranderOranje)

function veranderRood(){
	var http = new XMLHttpRequest();
for (var i = 0; i < lampen.length; i++) {
	sendRequest(lampen[i], 0);
	console.log
	}
}

function veranderGroen(){
	var http = new XMLHttpRequest();
	http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
	http.send('{"hue": 30000}')
	}

function veranderOranje(){
	var http = new XMLHttpRequest();
	http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
	http.send('{"hue": 7000}')
}

function sendRequest(state){
	console.log("request komt er aan");
	var http = new XMLHttpRequest();
	http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200){
			//alert(http.responseText);
		}
	}
	if(state == 1){
		http.send('{"on": true}');
	}
	if(state == 0){
		http.send('{"hue": 123}');
	}
}

var aanknop = document.getElementById("aanknop");
var uitknop = document.getElementById("uitknop");
aanknop.addEventListener("click", function(){
	console.log("request");
 sendRequest(1);
});
uitknop.addEventListener("click", function(){
 sendRequest(0);
});
