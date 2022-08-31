import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

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
        <Image source={data.image} />
      </View>
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
