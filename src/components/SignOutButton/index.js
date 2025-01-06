import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignOutButton = ({ onPress, isDarkMode }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.signOutButton, { backgroundColor: '#fff' }]} // Set background color to white
    >
      <Text style={[styles.signOutText, { color: isDarkMode ? '#000' : '#000' }]}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    marginTop: 60,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center', // Center the text
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3, // Shadow radius
    elevation: 5, // For Android
  },
  signOutText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignOutButton;
