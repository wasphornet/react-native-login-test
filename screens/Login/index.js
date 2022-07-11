import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Button, StyleSheet, TextInput, Text, Alert } from "react-native";
import { loginUser, setLoggedIn } from "./action";
import { Platform } from "react-native";

const Login = ({ navigation, ...props }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { loading, isLoggedIn, message, error } = auth;
  const { OS } = Platform;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [error, setError] = React.useState('');

  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };

  React.useEffect(() => {
    if (message) {
      switch (OS) {
        case 'android':
          Alert.alert(`Login ${isLoggedIn ? 'success' : 'failed'}`, message, [
            {
              text: isLoggedIn ? 'Ok' : 'Try again',
              onPress: () => {
                if (isLoggedIn) {
                  navigation.navigate('Home');
                }
              },
            },
          ]);
          break;
        case 'web':
          alert(message);
          break;
      }
    }
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  }, [isLoggedIn, message, error]);

  // React.useEffect(() => {
  //   const isLogin = AsyncStorage.getItem("isLoggedIn") === "true";
  //   if (isLogin) {
  //     dispatch(setLoggedIn(true));
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 20 }}>Login Page</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={() => {
          onSubmit({ username, password });
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
    borderRadius: 5,
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

export default Login;
