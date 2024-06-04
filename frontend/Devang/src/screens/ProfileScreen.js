// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileScreen({ route }) {
  const { profile } = route.params;

  return (
    <View>
      <Image source={{ uri: profile.photo }} style={{ width: 100, height: 100 }} />
      <Text>Name: {profile.name}</Text>
      <Text>Date of Birth: {profile.dateOfBirth}</Text>
      <Text>Profession: {profile.profession}</Text>
    </View>
  );
}
