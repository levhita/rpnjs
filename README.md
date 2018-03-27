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
Input: [ 2, 1, + ]
Pila: [ ]
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
Pila: [ ]
Operación:
```

Paso 1:
```
Input: [ 2, + ]
Pila: [ 1 ]
Operación: 
```

Paso 2:
```
Input: [ + ]
Pila: [ 1, 2]
Operación: 
```
Paso 3:
```
Input: [  ]
Pila: [ 3 ]
Operación:  1 + 2 = 3
```

#### Ejecución Avanzada
Ahora un ejemplo con parentesis **(1 +2) - ( 3 + 4)**

Paso 0:
```

Input: [ 1,  2, +,  3,  4, +, - ]
Pila: [ ]
Operación:
```

Paso 1:
```
Input: [ 2, +,  3,  4, +, - ]
Pila: [ 1 ]
Operación:
```

Paso 2:
```
Input: [ +,  3,  4, +, - ]
Pila: [ 1, 2 ]
Operación:
```

Paso 3:
```
Input: [ 3,  4, +, - ]
Pila: [ 3 ]
Operación: 1 + 2 = 3
```

Paso 4:
```
Input: [ 4, +, - ]
Pila: [ 3 , 3]
Operación: 
```

Paso 5:
```
Input: [ +, - ]
Pila: [ 3 , 3, 4]
Operación: 
```

Paso 6:
```
Input: [ - ]
Pila: [ 3 , 7 ]
Operación: 3 + 4  = 7
```

Paso 7:
```
Input: [ ]
Pila: [ -4 ]
Operación: 3 + 7  = -4
```
