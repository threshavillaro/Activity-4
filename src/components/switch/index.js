import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const DarkModeToggle = ({ textColor, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.switchContainer, { backgroundColor, marginTop: 20 }]} // Apply dynamic background color and marginTop
      onPress={onPress}
    >
      <Icon name="moon" size={30} color={textColor} />
      <Text style={[styles.switchText, { color: textColor }]}>Dark Mode</Text>
      <Text style={[styles.arrowText, { color: textColor }]}>{' >'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.15,
    shadowRadius: 0.5,
    elevation: 1,
  },
  switchText: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight:'bold'
  },
  arrowText: {
    fontSize: 30,
    marginLeft: 'auto',
  },
});

export default DarkModeToggle;
