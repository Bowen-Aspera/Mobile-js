import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";
import axios from "../../plugins/axios";
import InputField from "../../components/InputField";

const Login = ({ navigation }) => {
    const [data, setData] = useState({
      email: "",
      password: "",
    });
  
    const handleRegistration = () => {
      navigation.navigate('Register');
    };
  
    const handleLogin = () => {
      axios
        .post("accounts/login/", data)
        .then((response) => {
          console.log(response.data);
          navigation.navigate('Profile');
        })
        .catch((error) => {
          console.log(error.response.data);
          Alert.alert("Login failed.");
        });
    };
  
    return (
      <View style={styles.container}>
        <InputField
          label="Email"
          placeholder="Your Email"
          value={data.email}
          onChangeText={(email) => setData({ ...data, email })}
        />
        <InputField
          label="Password"
          placeholder="Your Password"
          value={data.password}
          onChangeText={(password) => setData({ ...data, password })}
          secureTextEntry
        />
        <Button title="Submit" onPress={handleLogin} />
        <Button title="Register" onPress={handleRegistration} />
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  });