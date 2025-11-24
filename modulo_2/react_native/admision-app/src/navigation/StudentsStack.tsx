import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StudentsStackParamList } from "./types";
import StudentsListScreen from "../screens/StudentsListScreen";
import StudentFormScreen from "../screens/StudentFormScreen";
import colors from "../theme/colors";

const Stack = createStackNavigator<StudentsStackParamList>();

export default function StudentsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen 
        name="StudentsList" 
        component={StudentsListScreen} 
        options={{ title: "Postulantes" }} 
      />
      <Stack.Screen 
        name="StudentForm" 
        component={StudentFormScreen} 
        options={{ title: "Formulario" }} 
      />
    </Stack.Navigator>
  );
}
