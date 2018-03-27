//As we'll receive data from the user it'll probably come as a string;
var input = ['1', '2', '+'];
var stack = [];

///FIFO means First Input First Output, like the _tortillas_ queue.
while ( token=input.shift() ) {

	//The first part of the algorithm states that we need to check if is a number or not
	if(isNaN(token)){
		
		//From the notation we can see that the last element is the second value
		var second = stack.pop();
		
		//And the second to last element is the first value of the opearation
		var first  = stack.pop();
		switch(token){
			case '+':
				var result = first + second;
				break;
			case '-':
				var result = first + second;
				break;
			case '*':
				var result = first + second;
				break;
			case '/':
				var result = first + second;
				break;
		}
		stack.push(result);
		console.log(stack, token);
	} else {
		//If it's a number we put it in the LIFO, like the pile of _trastes_.
		stack.push(parseFloat(token));
		console.log(stack, token);
	}
}

