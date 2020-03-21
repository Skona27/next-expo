import React from "react";
import { StyleSheet, Text } from "react-native";
import { Box } from "@next-expo/components/Box";

export default function App() {
  return (
    <Box style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    border: "1px solid #000",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
