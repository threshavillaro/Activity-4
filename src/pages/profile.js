import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import InfoText from '../components/InfoText';
import NameTitle from '../components/NameTitle';
import SignOutButton from '../components/SignOutButton';
import DarkModeToggle from '../components/switch'; 
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigation = useNavigation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define text and background color based on the dark mode state
  const textColor = isDarkMode ? '#fff' : '#000';
  const backgroundColor = isDarkMode ? '#333' : '#fff';  // Darker background for dark mode

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      <View style={styles.profileHeader}>
        <View style={styles.profileLeft}>
          <Avatar source={require('../../assets/cat.jpg')} size="large" />
          <NameTitle 
            firstName="First" 
            lastName="Macapayad" 
            textColor={textColor} // Pass dynamic text color
          />
        </View>
        <View style={styles.profileRight}>
          <InfoText 
            label="Joined" 
            value="1 year ago" 
            textColor={textColor} // Pass dynamic text color
          />
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: textColor }]}>Profile</Text>

      <View style={styles.section}>
        <Button 
          iconName="user" 
          text="Manage User" 
          onPress={() => navigation.navigate('ManageUser')} 
          textColor={textColor} // Dynamic text color
          backgroundColor={isDarkMode ? '#444' : '#007BFF'} // Dynamic background color
        />
      </View>

      <Text style={[styles.sectionTitle, { color: textColor }]}>Settings</Text>

      <View style={styles.section}>
        <Button 
          iconName="bell" 
          text="Notifications" 
          onPress={() => console.log('Notifications')} 
          textColor={textColor} // Pass dynamic text color if needed
          backgroundColor={isDarkMode ? '#444' : '#007BFF'} // Add dynamic background color
        />
        <DarkModeToggle 
          textColor={textColor} // Pass dynamic text color
          backgroundColor={backgroundColor} // Pass dynamic background color
          onPress={toggleDarkMode} // Pass the toggle function
          style={styles.darkModeToggle} // Custom style for DarkModeToggle
        />
      </View>

      <SignOutButton 
        onPress={() => console.log('Sign Out')} 
        isDarkMode={isDarkMode} 
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  profileRight: {
    justifyContent: 'center',
    marginRight: 70,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  section: {
    marginVertical: 10,
  },
  darkModeToggle: {
    marginTop: 10, // Add spacing between buttons
  },
});

export default Profile;