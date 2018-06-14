
var rood = document.getElementById("rood")
var blauw = document.getElementById("blauw")
rood.addEventListener("click", veranderRood);
blauw.addEventListener("click", veranderBlauw);

function veranderRood(){
http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
	if (state == 0)
		http.send('{"hue": 123}')
}

function veranderBlauw(){
http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
	if (state == 1)
		http.send('{"hue": 40000}')
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
	if(state == 2){
		http.send('{"on": true}');
	}
	if(state == 3){
		http.send('{"on": false}');
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
