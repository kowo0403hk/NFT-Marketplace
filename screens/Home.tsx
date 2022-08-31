import React, { FC, useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, FocusStatusBar, NFTCard } from "../components";

const Home: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Home;
