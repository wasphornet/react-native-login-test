import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, StyleSheet } from "react-native";
import LoginScreen from "./Login";
import HomeScreen from "./Home";

const Stack = createNativeStackNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate("Profile", { name: "Jane" })}
//     />
//   );
// };

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Welcome" }}
    //     />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <HomeScreen/>
  );
};

export default MyStack;
