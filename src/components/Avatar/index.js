import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ source, size = "medium" }) => {
  const sizes = {
    small: 40,
    medium: 80,
    large: 120,
  };

  return (
    <View style={styles.container}>
      <Image 
        source={source} 
        style={[styles.avatar, { width: sizes[size], height: sizes[size] }]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', // Aligns the avatar to the left
    marginBottom: 20, // Adjusts the space below the avatar
    marginTop: 70,
    marginLeft: 20, // Add this line to lower the image
  },
  avatar: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ddd',
  },
});

export default Avatar;
