import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoadingComponent from "./LoadingComponent"; // Adjust the path as needed
import WelcomeScreen from "./app/screens/WelcomeScreen"; // Adjust the path as needed

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation like fetching data or waiting for an auth check
    setTimeout(() => {
      setLoading(false);
    }, 2000); // For example, wait for 2 seconds
  }, []);

  return (
    <LoadingComponent isLoading={isLoading}>
      <View style={styles.container}>
        {isLoading ? null : <WelcomeScreen />}
        <StatusBar style="auto" />
      </View>
    </LoadingComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
