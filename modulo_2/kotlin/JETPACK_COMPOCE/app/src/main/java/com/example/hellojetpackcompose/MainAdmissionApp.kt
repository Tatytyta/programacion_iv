package com.example.hellojetpackcompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

sealed class AdmissionScreen(val route: String) {
    object Home : AdmissionScreen("admission_home")
    object Register : AdmissionScreen("admission_register")
    object Requirements : AdmissionScreen("admission_requirements")
}

class MainAdmission : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent { AdmissionNavApp() }
    }
}

@Composable
fun AdmissionNavApp() {
    val nav = rememberNavController()
    MaterialTheme {
        Surface(modifier = Modifier.fillMaxSize()) {
            NavHost(
                navController = nav,
                startDestination = AdmissionScreen.Home.route
            ) {
                composable(AdmissionScreen.Home.route) { HomeAdmissionScreen(nav) }
                composable(AdmissionScreen.Register.route) { RegisterApplicantScreen(nav) }
                composable(AdmissionScreen.Requirements.route) { RequirementsScreen(nav) }
            }
        }
    }
}

@Composable
fun HomeAdmissionScreen(nav: NavHostController) {
    val bg = Color(0xFF0F172A)
    val cardColor = Color(0xFF1E293B)
    val accent = Color(0xFF38BDF8)

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(bg)
            .padding(16.dp)
    ) {
        Card(
            modifier = Modifier.align(Alignment.Center),
            colors = CardDefaults.cardColors(containerColor = cardColor)
        ) {
            Column(
                modifier = Modifier.padding(20.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "Sistema de Admisión",
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                    color = accent
                )
                Text(
                    text = "Seleccione una opción:",
                    color = Color.White
                )
                Button(
                    onClick = { nav.navigate(AdmissionScreen.Register.route) },
                    modifier = Modifier.fillMaxWidth(),
                    colors = ButtonDefaults.buttonColors(containerColor = accent)
                ) {
                    Text("Registrar Aspirante", color = Color.Black)
                }
                Button(
                    onClick = { nav.navigate(AdmissionScreen.Requirements.route) },
                    modifier = Modifier.fillMaxWidth(),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF4ADE80))
                ) {
                    Text("Requisitos", color = Color.White)
                }
            }
        }
    }
}

@Composable
fun RegisterApplicantScreen(nav: NavHostController) {
    var name by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var career by remember { mutableStateOf("") }

    val bg = Color(0xFF0F172A)
    val cardColor = Color(0xFF1E293B)
    val accent = Color(0xFFA855F7)

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(bg)
            .padding(16.dp)
    ) {
        Column(modifier = Modifier.fillMaxWidth()) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = cardColor)
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Text(
                        text = "Registrar Aspirante",
                        style = MaterialTheme.typography.titleLarge,
                        color = accent,
                        fontWeight = FontWeight.Bold
                    )
                    OutlinedTextField(
                        value = name,
                        onValueChange = { name = it },
                        label = { Text("Nombre completo") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    OutlinedTextField(
                        value = email,
                        onValueChange = { email = it },
                        label = { Text("Correo") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    OutlinedTextField(
                        value = career,
                        onValueChange = { career = it },
                        label = { Text("Carrera a aplicar") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    Button(
                        onClick = { },
                        modifier = Modifier.fillMaxWidth(),
                        colors = ButtonDefaults.buttonColors(containerColor = accent)
                    ) {
                        Text("Guardar", color = Color.White)
                    }
                }
            }
            Spacer(Modifier.height(16.dp))
            Button(
                onClick = { nav.navigateUp() },
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(containerColor = accent)
            ) {
                Text("Regresar", color = Color.White)
            }
        }
    }
}

@Composable
fun RequirementsScreen(nav: NavHostController) {
    val bg = Color(0xFF0F172A)
    val cardColor = Color(0xFF1E293B)
    val accent = Color(0xFF22C55E)

    val requisitos = listOf(
        "Copia de cédula y certificado de votación",
        "Acta de grado o certificado de estudios",
        "Fotos tamaño carnet",
        "Formulario de inscripción"
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(bg)
            .padding(16.dp)
    ) {
        Column(modifier = Modifier.fillMaxWidth()) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = cardColor)
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Text(
                        text = "Requisitos de Admisión",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold,
                        color = accent
                    )
                    requisitos.forEach {
                        Text("• $it", color = Color.White)
                    }
                }
            }
            Spacer(Modifier.height(16.dp))
            Button(
                onClick = { nav.navigateUp() },
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(containerColor = accent)
            ) {
                Text("Regresar", color = Color.Black)
            }
        }
    }
}


@Preview(showBackground = true)
@Composable
fun PreviewAll() {
    AdmissionNavApp()
}
