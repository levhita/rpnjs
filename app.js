
var result = null;
var input_string = null;
while ( input_string = prompt('Introduzca la operación que desea ejecutar en formato NPI') ) {
	result = reversePolishNotation(input_string);
	alert("El resultado es:" + result + ".");
}
alert("kthxbye.");

function reversePolishNotation(input_string) {
	var input = input_string.split(' ');
	var stack = [];

	///FIFO means First Input First Output, like the _tortillas_ queue.
	while ( token=input.shift() ) {

		//The first part of the algorithm states that we need to check if is a number or not
		if(isNaN(token)){

			//From the notation we can see that the last element is the second value
			var second = stack.pop();

			//And the second to last element is the first value of the opearation
			var first  = stack.pop();

			//Now we switch the operation to be applied
			var result = null;
			switch(token){
				case '+':
				var result = first + second;
				break;
				case '-':
				var result = first - second;
				break;
				case '*':
				var result = first * second;
				break;
				case '/':
				var result = first / second;
				break;
				default:
				throw new Error("Invalid Operator!");
				break;
			}
			//Put the result at the top of the LIFO
			stack.push(result);
			console.log(stack, token);

		} else {
			//If it's a number we put it in the LIFO, like the pile of _trastes_.
			stack.push(parseFloat(token));
			console.log(stack, token);
		}
	}
	//The result is at the last element of the LIFO (if the tokens entered are valid of course)
	return stack.pop();
}