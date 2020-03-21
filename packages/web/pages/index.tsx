import React from "react";
import { Text } from "react-native";
import { Box } from "@next-expo/components/Box";

const IndexPage = () => {
  return (
    <Box>
      <Text accessibilityRole="header" aria-level="1">
        Hello World!
      </Text>
    </Box>
  );
};

export default IndexPage;
