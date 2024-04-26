import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const LoadingComponent = ({ isLoading, children }) => {
  if (!isLoading) return children;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingComponent;
