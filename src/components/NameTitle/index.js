import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const NameTitle = ({ firstName, lastName, textColor }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.firstName, { color: textColor }]}>{firstName}</Text>
      <Text style={[styles.lastName, { color: textColor }]}>{lastName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Optional: center-align the text if needed
  },
  firstName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 0, // Adjusts vertical spacing
  },
  lastName: {
    fontSize: 20, // You can adjust this size as needed
    fontWeight: 'normal', // Make sure it's not bold
    marginVertical: 0, // Adjusts vertical spacing
  },
});

export default NameTitle;
