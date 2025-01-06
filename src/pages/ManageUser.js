import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Button from '../components/Button'; // Correct path for Button
import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons

const ManageUser = () => {
  const handleAction = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Manage User</Text>

      <View style={styles.section}>
        <Button 
          icon={<Icon name="user" size={20} color="#000" />} // User icon for Change Username
          text="Change Username" 
          onPress={() => handleAction('Change Username')} 
          buttonStyle={styles.button} 
        />
      </View>

      <View style={styles.section}>
        <Button 
          icon={<Icon name="lock" size={20} color="#000" />} // Lock icon for Reset Password
          text="Reset Password" 
          onPress={() => handleAction('Reset Password')} 
          buttonStyle={styles.button} 
        />
      </View>

      <View style={styles.section}>
        <Button 
          icon={<Icon name="trash" size={20} color="#000" />} // Trash icon for Delete Account
          text="Delete Account" 
          onPress={() => handleAction('Delete Account')} 
          buttonStyle={styles.button} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  section: {
    marginVertical: 15,
    width: '100%',
  },
  button: {
    backgroundColor: '#f0f0f0', // Change this to your desired color
    borderRadius: 8,
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center the content vertically
    padding: 15, // Padding for the button
  },
});

export default ManageUser;
