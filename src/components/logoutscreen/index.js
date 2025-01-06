import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function LogoutScreen({ navigation }) {
  const handleLogout = () => {
    // Clear authentication data here if needed
    Alert.alert("Logged Out Successfully");
    navigation.navigate('LoginScreen'); // Navigate back to login
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
