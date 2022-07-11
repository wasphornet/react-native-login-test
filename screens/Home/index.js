import React from "react";
import { useDispatch } from "react-redux";
import { View, Button, StyleSheet, Text } from "react-native";
import { logout } from "../Login/action";

const Home = ({ navigation, ...props }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Login Success</Text>
      <Button
        style={styles.button}
        title="Logout"
        onPress={() => {
          dispatch(logout());
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
    maxWidth: 550,
  },
  button: {
    margin: 12,
  },
  container: {
    padding: 12,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
