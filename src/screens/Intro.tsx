import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from '../context/LanguageContext';

const Intro = () => {
  const { hello } = useTranslation();

  return (
    <View>
      <Text>{hello}</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({});
