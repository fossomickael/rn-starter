import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Accueil</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to list Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to image Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
