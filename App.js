import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/pages/profile'; // Correct path for Profile
import ManageUser from './src/pages/ManageUser'; // Correct path for ManageUser

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="profile" 
          component={Profile} 
          options={{ headerShown: false }} // Hides the header for Profile
        />
        <Stack.Screen 
          name="ManageUser" 
          component={ManageUser} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
