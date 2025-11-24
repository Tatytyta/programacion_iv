# Sistema de Admisión - App de Gestión de Postulantes

Aplicación móvil para gestionar el proceso de admisión institucional, incluyendo registro de postulantes, autenticación y CRUD completo.

## 🚀 Características

- ✅ Autenticación (Login/Registro)
- ✅ Gestión de postulantes (CRUD completo)
- ✅ Interfaz moderna con efectos glass morphism
- ✅ Navegación por pestañas y stack
- ✅ Integración con APIs REST
- ✅ Almacenamiento de sesión

## 📁 Estructura del Proyecto

```
admision-app/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── AppButton.tsx
│   │   ├── AppInput.tsx
│   │   ├── GlassCard.tsx
│   │   └── GradientBg.tsx
│   ├── navigation/       # Configuración de navegación
│   │   ├── AuthStack.tsx
│   │   ├── RootNavigator.tsx
│   │   ├── StudentsStack.tsx
│   │   ├── TabsNavigator.tsx
│   │   └── types.ts
│   ├── screens/         # Pantallas de la app
│   │   ├── WelcomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── StudentsListScreen.tsx
│   │   ├── StudentFormScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── services/        # Servicios y APIs
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   └── students.service.ts
│   ├── store/          # Estado global
│   │   └── auth.ts
│   └── theme/          # Colores y estilos
│       ├── colors.ts
│       └── gradients.ts
├── App.tsx
├── babel.config.js
└── package.json
```

## 🛠️ Instalación

1. **Clonar e instalar dependencias:**
   ```bash
   cd admision-app
   npm install
   ```

2. **Iniciar la aplicación:**
   ```bash
   npx expo start
   ```

3. **Ejecutar en dispositivo:**
   - Escanea el código QR con Expo Go (Android/iOS)
   - O presiona `a` para Android emulator
   - O presiona `i` para iOS simulator

## 📦 Dependencias Principales

- **React Native & Expo** - Framework principal
- **React Navigation** - Navegación (Stack, Tabs)
- **Axios** - Cliente HTTP
- **Expo Linear Gradient** - Gradientes
- **React Native Gesture Handler** - Gestos
- **React Native Reanimated** - Animaciones

## 🎨 Pantallas

### Autenticación
- **Welcome**: Pantalla de bienvenida
- **Login**: Ingreso institucional
- **Register**: Crear cuenta de postulante

### Aplicación Principal
- **Home**: Panel de información institucional
- **Students List**: Lista de postulantes con opciones CRUD
- **Student Form**: Formulario para crear/editar postulantes
- **Profile**: Perfil de usuario con opción de logout

## 🔐 Credenciales de Prueba

Para probar el login, usa las credenciales de la API de prueba:
```
Email: eve.holt@reqres.in
Password: cualquier texto
```

## 🌐 APIs Utilizadas

- **Autenticación**: https://reqres.in/api
- **Estudiantes**: https://fakestoreapi.com (adaptado)

## 📝 Notas

- Los datos de estudiantes están mockeados para demostración
- La sesión se mantiene en memoria (no persiste entre reinicios)
- El diseño usa glass morphism y gradientes morados

## 🚧 Próximas Mejoras

- [ ] Persistencia de sesión con AsyncStorage
- [ ] Validación de formularios
- [ ] Búsqueda y filtrado de postulantes
- [ ] Carga de imágenes de perfil
- [ ] Notificaciones push
- [ ] Modo oscuro/claro

## 👨‍💻 Desarrollo

Creado con ❤️ para el sistema de admisión institucional.
