import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from '../context/LanguageContext';

const Login = () => {
  const { world } = useTranslation();

  return (
    <View>
      <Text>{world}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
