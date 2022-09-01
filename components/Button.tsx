import { TouchableOpacity, View, Text, Image } from "react-native";
import React, { FC } from "react";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

interface ICircle {
  imgUrl: any;
  // handlePress: Function;
  right: number;
  top: number;
}

export const CircleButton: FC<ICircle> = ({
  imgUrl,
  // handlePress,
  right,
  top,
}: ICircle) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        right,
        top,
        ...SHADOWS.light,
      }}
      // onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectangularButton: FC = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};
