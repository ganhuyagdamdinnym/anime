import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ImageDetailScreen from "../screens/DetailsScreen";
import { ScrollView } from "react-native";
const Stack = createStackNavigator();
const App = () => {
  //: () => Node
  //{ navigation }: { navigation: any }

  // return <HomeScreen navigation={undefined} />;
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImageDetailScreen"
        component={ImageDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;
