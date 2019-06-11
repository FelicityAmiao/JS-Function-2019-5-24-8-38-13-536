function reverseString(message){
  // wirte your code here
	let arr = message.split("");
	arr.reverse();
	message = arr.join("");
	return message;
}
reverseString('hello'); // should return 'olleh'