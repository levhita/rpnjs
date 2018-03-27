//As we'll receive data from the user it'll probably come as a string;
var input = ['1', '2', '+'];
var stack = [];

///FIFO means First Input First Output, like the _tortillas_ queue.
while ( token=input.shift() ) {

	//The first part of the algorithm states that we need to check if is a number or not
	if( isNaN(token) ){
		console.log(token, 'Not a Number');
	} else {
		//If it's a number we put it in the LIFO, like the pile of _trastes_.
		stack.push(parseFloat(token));
		console.log(stack, token);
	}
}

