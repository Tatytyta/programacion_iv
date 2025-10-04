package com.example.kotlin

fun main() {
    println("¡Operadores Aritméticos en Admisión!")

    val notaExamen: Double = 8.5
    val notaEntrevista: Double = 9.0
    println("Suma (total de puntos): ${notaExamen + notaEntrevista}")
    println("Resta (diferencia entre notas): ${notaExamen - notaEntrevista}")
    println("Multiplicación (ponderación simulada): ${notaExamen * notaEntrevista}")
    println("División (promedio simple): ${(notaExamen + notaEntrevista) / 2}")
    val promedioFinal: Double = (notaExamen * 0.7) + (notaEntrevista * 0.3)
    println("Promedio final para admisión: $promedioFinal")
}
