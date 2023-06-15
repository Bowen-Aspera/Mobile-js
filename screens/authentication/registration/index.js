import { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import axios from "../../../plugins/axios";
import InputField from "../../../components/InputField";

// Singleton Design Pattern para sa Axios, where isa ra ka instace nga axios class ang mag exists
const axiosInstance = (() => {
  let instance;

  const createInstance = () => {
    const axiosInstance = axios.create();
    return axiosInstance;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Factory Design Pattern, where when an end user registers, ma labeled sila as a "user"
const createUser = (data) => {
  return {
    label: "user",
    data: {
      ...data,
      userType: "user",
    },
  };
};

const Registration = () => {
  const [data, onChangeData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    birthdate: null,
    gender: "",
  });

  const handleRegistration = () => {
    const user = createUser(data);
    const axiosInstance = axiosInstance.getInstance();
    axiosInstance
      .post("accounts/users/", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <View style={style.container}>
        <InputField
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
        <InputField
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
        <InputField
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
        <InputField
          label="First Name"
          placeholder="Your Last Name"
          value={data.first_name}
          onChangeText={(firstname) => {
            onChangeData({
              ...data,
              first_name: firstname,
            });
          }}
        />
        <InputField
          label="Last Name"
          placeholder="Your Last Name"
          value={data.last_name}
          onChangeText={(lastname) => {
            onChangeData({
              ...data,
              last_name: lastname,
            });
          }}
        />
        <InputField
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
        <InputField
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

const style = StyleSheet.create({
  inputFields: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});