# Solucion 

La solución que le e encontrado a este problema es una implementación recursiva con memorización para contar el número de formas únicas de subir una escalera con un número variable de escalones, dado un conjunto de pasos posibles.
La función countWays toma dos argumentos: N, que representa el número de escalones de la escalera, y X, que es un array que contiene los pasos posibles que se pueden tomar en cada escalón. La función crea un array cache para almacenar los resultados previamente calculados y lo inicializa con valores -1. A continuación, llama a la función countWaysUtil para realizar el cálculo real.
La función countWaysUtil es una función auxiliar recursiva que utiliza memoización para evitar el recálculo de resultados ya calculados. Si N es menor que 0, significa que no hay formas de subir la escalera y devuelve 0. Si el resultado para N ya está presente en la caché, se devuelve ese valor almacenado en lugar de calcularlo nuevamente. De lo contrario, se itera sobre el conjunto de pasos posibles y se llama recursivamente a countWaysUtil para calcular el número de formas únicas para subir la escalera desde N hasta N - X[i] para cada paso X[i]. Se suman los resultados y se almacena en la caché antes de devolver el resultado.
Luego, se muestran los resultados en la consola utilizando console.log. Para el primer ejemplo con N = 4 y pasos [1, 2], imprimirá:
5
Y para el segundo ejemplo con N = 4 y pasos [1, 3, 5], imprimirá:
3
Estos resultados representan el número de formas únicas de subir la escalera en cada caso.

# Big O
el código tiene una complejidad de aproximadamente O(N * X.length), donde N es la altura de la escalera y X es el conjunto de pasos permitidos.