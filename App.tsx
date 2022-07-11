// import * as React from "react";
// import { store } from "./store";
// import { Provider } from "react-redux";
// import MyStack from "./screens"
// import { AppRegistry } from "react-native";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <MyStack/>
//     </Provider>
//   );
// };
// export default AppRegistry.registerComponent('MyApp', () => App);
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { store } from "./store";
import { Provider } from "react-redux";
import MyStack from "./screens"

// const Stack = createNativeStackNavigator();

// const HomeScreen = ({ navigation }: any) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate("Profile", { name: "Jane" })}
//     />
//   );
// };
// const ProfileScreen = ({ navigation, route }: any) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <MyStack/>
    </Provider>
  );
  // return (<MyStack/>);
};

export default App;
