import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import gradients from "../theme/gradients";

export default function GradientBg({ children, ...props }: ViewProps) {
  return (
    <LinearGradient
      colors={gradients.purple}
      style={styles.gradient}
      {...props}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
