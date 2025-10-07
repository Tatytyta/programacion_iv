package com.example.basic

import kotlinx.coroutines.processNextEventInCurrentThread

fun saludar (){
    println("hola desde una funcion de kotlin")
}
//fucion con parametros y retorno
fun sumar (a:Int,b:Int):Int{
    return a+b
}

// funcion con exprecion singlr-expression function
fun cuadrado (numero: Int)=numero*numero

//funcion con retorno multiple
fun retornoMultiple (a:Int, b: Int): Pair<Int, Int>{
    val suma=a+b
    val resta= a-b
    return Pair(suma,resta)
}

fun main() {
    saludar()
    val resultado =sumar (a=5,b=6)
    println(resultado)
    println(cuadrado(numero=5))
    println(retornoMultiple(a = 15,b=5)

    //funcion lambda
    val cuadradoLambda={x:Int->x*x}
    val saludoLambda={nombre: String->"Goot Morning, $nombre"}
    println(cuadradoLambda(4))
    println(saludoLambda("Juan LUis Guerra"))



}