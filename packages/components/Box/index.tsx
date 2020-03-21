import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

export const Box: React.FC<{ style?: StyleProp<ViewStyle> }> = ({
  children,
  style
}) => {
  return <View style={style}>{children}</View>;
};

Box.propTypes = {};
