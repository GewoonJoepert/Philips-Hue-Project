
function sendRequest(state){

	var http = new XMLHttpRequest();
	http.open("PUT", "http://192.168.0.141/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200){
			alert(http.responseText);
		}
	}
	if(state == 1){
		http.send('{"on": true}');
	}
	if(state == 0){
		http.send('{"on": false}');
	}
}

var aanknop = document.getElementById("aanknop");
var uitknop = document.getElementById("uitknop");
aanknop.addEventListener("click", function(){
 sendRequest(1);
});
uitknop.addEventListener("click", function(){
 sendRequest(0);
});
