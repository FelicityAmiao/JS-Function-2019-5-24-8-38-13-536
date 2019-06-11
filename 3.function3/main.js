function alphabetSort(message){
  // wirte your code here
	let arrMsg = message.split("");
	arrMsg.sort(function(x, y) {
		var xUpperCase = x.toUpperCase();
		var yUpperCase = y.toUpperCase();
		if(xUpperCase > yUpperCase) {
			return 1;
		}else if(xUpperCase < yUpperCase) {
			return -1;
		}else {
			return 0;
		}
	});
	message = arrMsg.join("");
	return message;
}
alphabetSort('hello'); // should return 'ehllo'