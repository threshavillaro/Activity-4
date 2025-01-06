import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const InfoText = ({ label, value, textColor }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: 'gray' }]}>{label}</Text>
      <Text style={[styles.value, { color: textColor }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5, // Adjust spacing if needed
  },
  label: {
    fontSize: 16,
    marginVertical: 2, // Space between label and value
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold', // Make the value bold
  },
});

export default InfoText;
