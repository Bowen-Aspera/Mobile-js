import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "../../plugins/axios";

// Proxy object for fetching user data from the server
const UserDataProxy = () => {
  // Cached user data
  let userData = null;

  // Function to fetch user data from the server
  const fetchData = () => {
    // Check if user data is already cached
    if (!userData) {
      // Fetch user data from the server using Axios
      return axios
        .get("accounts/users/me/")
        .then((response) => {
          // Cache the retrieved user data
          userData = response.data;
          return userData;
        })
        .catch((error) => {
          console.log(error.response.data);
          throw error;
        });
    } else {
      // Return the cached user data directly
      return Promise.resolve(userData);
    }
  };

  // Expose the fetchData function as the interface for retrieving user data
  return {
    fetchData,
  };
};

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Create an instance of the UserDataProxy
    const proxy = UserDataProxy();

    // Fetch user data from the proxy
    proxy
      .fetchData()
      .then((data) => {
        // Set the retrieved user data in the component state
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* Existing comment: Display Email */}
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData?.email}</Text>

        {/* Existing comment: Display Username */}
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{userData?.username}</Text>

        {/* Existing comment: Display First Name */}
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{userData?.first_name}</Text>

        {/* Existing comment: Display Last Name */}
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value}>{userData?.last_name}</Text>

        {/* Existing comment: Display Birthdate */}
        <Text style={styles.label}>Birthdate:</Text>
        <Text style={styles.value}>{userData?.birthdate}</Text>

        {/* Existing comment: Display Gender */}
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{userData?.gender}</Text>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
});
