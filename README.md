# Notación Polaca Inversa
 En este ejercicio vamos a implementar una versión simplificada de la [notación polaca inversa](https://en.wikipedia.org/wiki/Reverse_Polish_notation), utilizando los **métodos** básicos disponibles en los **Arrays** y un poco de manipulación de **Stings**.
 
 La notación polaca inversa requiere de muy poca memoría y es relativamente amigable para el humano, por su simplicidad fue inventada independientemente por varios cientificos.

Fue ampliamente usada en las primeras calculadoras por su bajo consumo de memoria y lo extremadamente fácil que es de programar.

 ## Formato
- En **NPI** los parámetros son colocados primero, seguidos del operador:

Regular:
```1 + 2```
 NPI:
```1 2 + ```


- En **NPI** los parentesís no son necesarios, se obtiene el mismo resultado con un ordén adecuado de los parámetros y operadores-

Regular:
```( 1 + 2) - ( 3  + 4)```
NPI:
```1 2 + 3 4 + -```

### Resolver una operación en Notación Polaca Inversa

Necesitaremos tener una entrada desde la cual leeremos los valores y operadores; y una pila donde almacenaremos los resultados parciales: 

```
// 1 + 2
Input: [ 1, 2, + ]
Stack: [ ]
```

El resultado se forma al leer consecutivamente de la entrada y aplicar las siguientes reglas, hasta que se termine la entrada: 

- Sí es un valor, añadirlo al tope de la pila.
- Sí es un operador:
  1. Sacar los últimos 2 operadores de la pila.
  2. Aplicar el operador.
  3. Poner el resultado en el tope de la pila.

#### Ejecución Simple
Una sola operación **1 + 2**

Paso 0:
```
Input: [ 1, 2, + ]
Stack: [ ]
Operación:
```

Paso 1:
```
Input: [ 2, + ]
Stack: [ 1 ]
Operación: 
```

Paso 2:
```
Input: [ + ]
Stack: [ 1, 2]
Operación: 
```

Paso 3:
```
Input: [  ]
Stack: [ 3 ]
Operación:  1 + 2 = 3
```

#### Ejecución Avanzada
Ahora un ejemplo con parentesis **(1 +2) - ( 3 + 4)**

Paso 0:
```

Input: [ 1,  2, +,  3,  4, +, - ]
Stack: [ ]
Operación:
```

Paso 1:
```
Input: [ 2, +,  3,  4, +, - ]
Stack: [ 1 ]
Operación:
```

Paso 2:
```
Input: [ +,  3,  4, +, - ]
Stack: [ 1, 2 ]
Operación:
```

Paso 3:
```
Input: [ 3,  4, +, - ]
Stack: [ 3 ]
Operación: 1 + 2 = 3
```

Paso 4:
```
Input: [ 4, +, - ]
Stack: [ 3 , 3]
Operación: 
```

Paso 5:
```
Input: [ +, - ]
Stack: [ 3, 3, 4]
Operación: 
```

Paso 6:
```
Input: [ - ]
Stack: [ 3, 7 ]
Operación: 3 + 4  = 7
```

Paso 7:
```
Input: [ ]
Stack: [ -4 ]
Operación: 3 + 7 = -4
```
## Ahora en Javascript

### 1.- Cola/FIFO
La entrada es una estructura de datos conocida como Cola/FIFO (First Input First Output), y puede ser modelada en javascript usando un **Array** y sus métodos por defecto **shift()** y **unshift()**.

Cada uno de los elementos dentro de input pueden ser sacados del inicio de la misma usando **shift()** dentro de un **while**.

```
var input = [1, 2, '+'];
while ( token=input.shift() ) {
	console.log(input, token);
}
```

Este ciclo es muy similar a un **for**, generalmente se prefiere el **for** porque no es destructivo (es decir, no modifica el **Array**), pero en este caso uno de los beneficios de NPI es que mantiene el uso de memoría muy bajo, así que aprovecharemos que al hacer **shift()**, se elimina el valor **Array**, liberando memoría, como lo hubieran hecho Grace Hooper en sus tiempos de programadora.

### 2.- Is not a Number?
Ahora debemos validar si el token recibido es un número o no, podemos usar la función nativa de JS **isNaN()**, la cual realizará el casting de **String** a número y verificará si el resultado es efectivamente un número.

```
if( isNaN(token) ){
	console.log(token, 'Not a Number');
} else {
	console.log(token, 'Number');
}
```

### 3.- Pila/LIFO
La Pila donde guardaremos los resultados es una estructura de datos conocida como LIFO (Last Input First Output), y puede ser modelada en javascript usando un **Array** y sus métodos por defecto **pop()** y **push()**.

En caso de que el token sea un número simplemente lo añadimos a pila, como último elemento usando **push()**:
```
if( isNaN(token) ){
	console.log(token, 'Not a Number');
} else {
	stack.push(parseFloat(token));
}
```
El token muy probablemente fue introducido como un **String** así que primero lo convertimos a flotante usando **parseFloat()**.

### 4.- Aplicar Operaciones
Sí el token NO es un número significa que es un operador (o un carácter ínvalido), en ese caso debemos aplicar el algoritmo y sacar de la pila los 2 elementos superiores:
```
var second = stack.pop();
var first  = stack.pop();
```

Una vez obtenidos, realizamos la operación:
```
var result = null;
switch(token){
	case '+':
		result = first + second;
		break;
	case '-':
		result = first - second;
		break;
	case '*':
		result = first * second;
		break;
	case '/':
		result = first / second;
		break;
	default:
		throw new Error("Invalid Operator!");
		break;
}
```

Finalmente colocamos el resultado en el tope de la pila
```
stack.push(result);
```
En este punto el algoritmo está completo y da el resultado buscado, sólo que aún no lo desplegamos.

### 5.- Obteniendo el resultado
Si la entrada es válida en este punto en resultado se encuentra en el tope de la pila, podemos obtenerlo con **pop()**.

```
console.log(stack.pop());
```

##Terminando la interface
Por supuesto tu programa no puede depender de que el usuario introduzca los valores y operadores en tu arreglo así que hagamos un par de cambios para recibir entrada del usuario.

Recibiremos el **String** del usuario usando la función **prompt()**, así mismo **String** cuenta con un método que divide la cadena en un **Array**, utilizando el separador que le indiquemos, en este caso un espacio en blanco.
```
var input_string = prompt('Introduzca la operación que desea ejecutar en formato NPI');
var input = input_string.split(' ');
```
Devolveremos el valor usando la función **alert()**.
```
alert("El resultado es:" + stack.pop());
```

Por último introducimos todo dentro de una función para que sea reutilizable y podamos recibir entradas del usuario tanto como él lo desee.
```
while ( input_string = prompt('Introduzca la operación que desea ejecutar en formato NPI') ) {
	result = reversePolishNotation(input_string);
	alert("El resultado es:" + result + ".");
}
alert("kthxbye.");

function reversePolishNotation(input_string) {...}
```

##Para probar en casa
  1. ¿Podemos introducir valores flotantes?
  2. ¿Cómo implementarías operadores que sólo toman 1 valor, como **sin()**, **tan()** y **log()**?
  3. Intenta substituir el **switch** con un **eval()**, es inseguro, pero puedes llegar a disminuir el código a 1  solo linea y automagicamente funcionarán operadores como **%**.
  4. Estamos lanzando una **Exception** cuando el operador es ínvalido, ¿Puedes cacharla para mostrar un mensaje error en lugar de que se detenga la ejecución del programa?


