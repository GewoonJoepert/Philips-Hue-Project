
function sendRequest(state){
	console.log("request komt er aan");
	var http = new XMLHttpRequest();
<<<<<<< HEAD
<<<<<<< HEAD
	http.open("PUT", "http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
=======
	http.open("PUT", "http://http://192.168.178.172/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
>>>>>>> dfefc5046f5fbcf36ff0c7a3c00594f8331edf22
=======
	http.open("PUT", "http://192.168.0.141/api/l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB/lights/1/state");
>>>>>>> 1c194de4cf271af486ae74e1558e4536bd6756d3
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200){
			//alert(http.responseText);
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
	console.log("request");
 sendRequest(1);
});
uitknop.addEventListener("click", function(){
 sendRequest(0);
});
