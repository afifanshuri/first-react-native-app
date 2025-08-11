import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainScreenStyle from './MainStyle';
import Title from '../../components/Title';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBackward, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentService } from '../../../redux/reducers/Service';
import { getFontFamily } from '../../../assets/fonts/helper';
import BackButton from '../../components/BackButton';
import SingleService from '../../components/SingleService';
import { MainStyleConstant } from '../../../constants/styleConstant';

const ServicePage = ({ navigation }) => {
  const currentService = useSelector(state => state.service);
  const currentCategory = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentService(currentCategory.currentSelectedCategory));
    console.log(currentCategory.currentCategory.name);
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: MainStyleConstant.MAIN_COLOR, flex: 1 }}
      edges={['top']}
    >
      <FlatList
        ListHeaderComponent={
          <View style={MainScreenStyle.header}>
            <BackButton
              onPress={() => navigation.goBack()}
              color="white"
            ></BackButton>
            <Title
              title={`${currentCategory.currentCategory.name} Jobs`}
              textAlign="left"
              fontSize={24}
              color={'white'}
            ></Title>
          </View>
        }
        data={currentService.currentService}
        renderItem={({ item }) => {
          return (
          <View style={{paddingHorizontal: 20, marginBottom: 10,alignItems: 'center'}}>
            <SingleService
              name={item.name}
              price={item.price}
              description={item.description}
              rating={item.rating}
            />
          </View>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
};
export default ServicePage;
