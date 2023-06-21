# Solución 
La solución que le e dado a este problema es una función llamada shortest_dist que encuentra la distancia más corta desde cada carácter de una cadena hasta la última aparición de otro carácter en esa cadena.
La función toma dos argumentos: s, que es la cadena en la que queremos encontrar las distancias, y c, que es el carácter hasta el cual queremos calcular las distancias más cortas.
El programa utiliza un enfoque de dos pasadas para calcular las distancias. En la primera pasada, recorre la cadena s de izquierda a derecha y rastrea la posición más reciente de c. Para cada carácter en s, si es igual a c, actualiza la variable prev con la posición actual. Luego, calcula la distancia desde el carácter actual hasta la posición más reciente de c y la almacena en el arreglo result.
En la segunda pasada, recorre la cadena s de derecha a izquierda y rastrea la posición más reciente de c desde el final de la cadena. Para cada carácter en s, si es igual a c, actualiza la variable prev con la posición actual. Luego, calcula la distancia desde el carácter actual hasta la posición más reciente de c y la compara con la distancia previamente calculada en la primera pasada. Toma el valor mínimo entre las dos distancias y actualiza el arreglo result con el valor más pequeño.
Finalmente, se devuelve el arreglo result que contiene las distancias más cortas desde cada carácter hasta la última aparición de c en la cadena.
En el ejemplo que has proporcionado, se llama a la función shortest_dist con la cadena 'helloworld' y el carácter 'l'. El resultado impreso en la consola será:
[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]
Esto significa que la distancia más corta desde cada carácter de la cadena 'helloworld' hasta la última aparición de 'l' es [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]. Por ejemplo, el primer elemento del arreglo es 2, lo cual indica que la distancia más corta desde el primer carácter 'h' hasta la última aparición de 'l' es de 2 caracteres.

# Big O
El programa  tiene una complejidad de aproximadamente O(n), donde n es la longitud de la cadena 's'.