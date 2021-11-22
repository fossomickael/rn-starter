import React from "react";
import { Text, StyleSheet, View } from "react-native";

const name = (style) => <Text style={style}>Je suis Mickaël</Text>;

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with React Native</Text>
      {name(styles.textStyle)}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  titleStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
