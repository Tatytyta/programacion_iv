import 'package:go_router/go_router.dart';

import 'pages/home_page.dart';
import 'pages/registro_page.dart';
import 'pages/puntaje_page.dart';
import 'pages/requisitos_page.dart';

final GoRouter appRouter = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (_, __) => const HomePage(),
    ),
    GoRoute(
      path: '/registro',
      builder: (_, __) => const RegistroPage(),
    ),
    GoRoute(
      path: '/puntaje',
      builder: (_, __) => const PuntajePage(),
    ),
    GoRoute(
      path: '/requisitos',
      builder: (_, __) => const RequisitosPage(),
    ),
  ],
);
