// Test básico de la aplicación de viajes

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:flutter_practica_viajes/main.dart';

void main() {
  testWidgets('Travel app loads successfully', (WidgetTester tester) async {
    // Construir la aplicación y verificar que cargue
    await tester.pumpWidget(const TravelApp());

    // Verificar que la aplicación carga correctamente
    expect(find.byType(MaterialApp), findsOneWidget);
  });
}
