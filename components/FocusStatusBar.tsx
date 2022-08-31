import React, { FC } from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

interface IFocus {
  background: string;
}

const FocusStatusBar: FC<IFocus> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusStatusBar;
