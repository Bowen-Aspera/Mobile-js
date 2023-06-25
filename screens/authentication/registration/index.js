import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import axios from "../../../plugins/axios";
import InputField from "../../../components/InputField";

const createUser = (data) => {
  return {
    label: "user",
    data: {
      ...data,
      userType: "user",
    },
  };
};

// Decorator: CharacterCounterDecorator
const CharacterCounterDecorator = (WrappedComponent) => {
  return ({ value, ...props }) => {
    const [characterCount, setCharacterCount] = useState(value.length);

    const handleChangeText = (text) => {
      setCharacterCount(text.length);
      props.onChangeText(text);
    };

    return (
      <View>
        <WrappedComponent {...props} value={value} onChangeText={handleChangeText} />
        <Text style={styles.characterCount}>{characterCount}</Text>
      </View>
    );
  };
};

const DecoratedInputField = CharacterCounterDecorator(InputField);

const Registration = () => {
  const [data, onChangeData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    birthdate: "",
    gender: "",
  });

  const handleRegistration = () => {
    const user = createUser(data);
    axios
      .post("accounts/users/", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <>
      <View style={styles.container}>
        <DecoratedInputField
          label="Email"
          placeholder="Your Email"
          value={data.email}
          onChangeText={(email) => {
            onChangeData({
              ...data,
              email: email,
            });
          }}
        />
        <DecoratedInputField
          label="Username"
          placeholder="Your Username"
          value={data.username}
          onChangeText={(username) => {
            onChangeData({
              ...data,
              username: username,
            });
          }}
        />
        <DecoratedInputField
          label="Password"
          placeholder="Your Password"
          value={data.password}
          onChangeText={(password) => {
            onChangeData({
              ...data,
              password: password,
            });
          }}
        />
        <DecoratedInputField
          label="First Name"
          placeholder="Your First Name"
          value={data.first_name}
          onChangeText={(firstName) => {
            onChangeData({
              ...data,
              first_name: firstName,
            });
          }}
        />
        <DecoratedInputField
          label="Last Name"
          placeholder="Your Last Name"
          value={data.last_name}
          onChangeText={(lastName) => {
            onChangeData({
              ...data,
              last_name: lastName,
            });
          }}
        />
        <DecoratedInputField
          label="Birthdate"
          placeholder="Your Birthdate"
          value={data.birthdate}
          onChangeText={(birthdate) => {
            onChangeData({
              ...data,
              birthdate: birthdate,
            });
          }}
        />
        <DecoratedInputField
          label="Gender"
          placeholder="Your Gender"
          value={data.gender}
          onChangeText={(gender) => {
            onChangeData({
              ...data,
              gender: gender,
            });
          }}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Button title="Submit" onPress={handleRegistration} />
      </View>
    </>
  );
};

export default Registration;

const styles = StyleSheet.create({
  inputFields: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  characterCount: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
});
