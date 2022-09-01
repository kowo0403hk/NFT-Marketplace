import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle: FC = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const ETHPrice: FC = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

interface IImageCmp {
  imgUrl: any;
  index: number;
}

export const ImageCmp: FC<IImageCmp> = ({ imgUrl, index }: IImageCmp) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People: FC = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate: FC = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const SubInfo: FC = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
