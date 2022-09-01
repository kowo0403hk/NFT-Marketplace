import React, { FC } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectangularButton } from "./Button";

interface IBids {
  id: string;
  name: string;
  price: number;
  image: any;
  date: string;
}

interface IEachCard {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: IBids[];
}

interface INFTCard {
  data: IEachCard;
}

const NFTCard: FC<INFTCard> = ({ data }: INFTCard) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <Text>NFT Card</Text>
    </View>
  );
};

export default NFTCard;
