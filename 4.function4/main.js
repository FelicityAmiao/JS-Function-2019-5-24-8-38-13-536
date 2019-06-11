function countWords(message){
  // wirte your code here
	let arrMsg = message.split(" ");
	return arrMsg.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5