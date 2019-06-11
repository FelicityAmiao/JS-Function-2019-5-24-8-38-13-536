function palindrome(message){
  // wirte your code here
	let arrMsg = message.split("");
	arrMsg.reverse();
	let reverseMsg = arrMsg.join("");
	if(message === reverseMsg) {
		return true;
	}else {
		return false;
	}
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true