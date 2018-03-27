///We create the basic data structures, a FIFO and a LIFO.
var input = [1, 2, '+'];
var stack = [];

///FIFO means First Input First Output, like the _tortillas_ queue.
while ( token=input.shift() ) {
	console.log(input, token);
}
