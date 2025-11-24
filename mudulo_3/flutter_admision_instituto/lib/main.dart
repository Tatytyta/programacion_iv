import 'package:flutter/material.dart';
import 'app_router.dart';

void main() {
  runApp(const InstitutoAdmisionApp());
}

class InstitutoAdmisionApp extends StatelessWidget {
  const InstitutoAdmisionApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Admisión Instituto',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      routerConfig: appRouter,
    );
  }
}
