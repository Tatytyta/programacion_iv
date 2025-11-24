import React from "react";
import { Pressable, Text, StyleSheet, PressableProps } from "react-native";
import colors from "../theme/colors";

type Props = PressableProps & {
  label: string;
  outline?: boolean;
};

export default function AppButton({ label, outline, ...props }: Props) {
  return (
    <Pressable
      style={[styles.button, outline && styles.outline]}
      {...props}
    >
      <Text style={[styles.text, outline && styles.outlineText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  outlineText: {
    color: colors.primary,
  },
});
