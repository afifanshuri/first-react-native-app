import React from 'react';
import { Text } from 'react-native';
import Title from '../../components/Title';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainScreenStyle from './MainStyle';

const Explore = () => {
  return (
    <SafeAreaView style={[MainScreenStyle.header,{flex:1}]} edges={['top']}>
      <Title title="Explore" fontSize={24} textAlign="left"></Title>
    </SafeAreaView>
  );
};

export default Explore;
