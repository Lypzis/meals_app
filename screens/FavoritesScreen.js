import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen = props => {
  props.navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => props.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  });

  return <MealList data={MEALS.slice(0, 2)} nav={props.navigation} />;
};

export default FavoriteScreen;
