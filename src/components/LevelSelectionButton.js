import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default props => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.bgButtonColor}]}
      onPress={props.onLevelSelected}>
      <Text style={styles.buttonLabel}>{props.levelName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
});
