import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';
import MainScreenStyle from './MainStyle';
import SearchBar from '../../components/SearchBar';
import { getFontFamily } from '../../../assets/fonts/helper';
import { useDispatch, useSelector } from 'react-redux';
import { Routes } from '../../navigation/Routes';
import { chooseCategory } from '../../../redux/reducers/Categories';
import { useNavigation } from '@react-navigation/native';
import { serviceIcons } from '../../assets/service-icons/service-icons';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { MainStyleConstant } from '../../../constants/styleConstant';
import SingleService from '../../components/SingleService';

const MainScreen = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const services = useSelector(state => state.service);
  const [recommendedServices, setRecommendedServices] = useState([]);
  useEffect(() => {
    setRecommendedServices(
      [...services.services].sort(() => Math.random() - 0.5).slice(0, 4),
    );
  }, []);

  function onChooseCategory() {
    if (categories.currentSelectedCategory !== null) {
      console.log(categories.currentSelectedCategory);
      navigator.navigate(Routes.Service);
    }
  }

  return (
    <SafeAreaView
      style={[MainScreenStyle.primaryTheme, { flex: 1 }]}
      edges={['top']}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={MainScreenStyle.header}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Title
              title={`Welcome, ${user.firstName}! 👋`}
              textAlign="left"
              fontSize={24}
            ></Title>
            <FontAwesomeIcon
              icon={faBell}
              size={20}
              color={MainStyleConstant.MAIN_COLOR}
            ></FontAwesomeIcon>
          </View>
          <SearchBar placeholder="Search for jobs.."></SearchBar>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: verticalScale(10),
              height: verticalScale(100),
            }}
          >
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={require('../../assets/app-ads/quicko-ads-banner.png')}
            />
          </View>
        </View>

        <View style={MainScreenStyle.header}>
          <Title
            title={'Find the services you need in your area​'}
            textAlign="left"
            fontSize={scaleFontSize(15)}
          />
        </View>

        <View>
          <FlatList
            horizontal={true}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(chooseCategory(item.categoryId));
                    onChooseCategory();
                  }}
                  style={MainScreenStyle.categoriesStyle}
                >
                  <Image
                    source={serviceIcons[item.icon]}
                    style={MainScreenStyle.categoriesIcon}
                  />
                  <Text
                    style={{
                      fontFamily: getFontFamily('Inter', 'Bold'),
                      fontSize: scaleFontSize(10),
                      flexWrap: 'wrap',
                      textAlign: 'center',
                    }}
                    numberOfLines={2}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
        

        <View style={[MainScreenStyle.bottomBackgroundSection,{flex: 1}]}>
          <View style={[MainScreenStyle.header, { marginTop: 5 }]}>
            <Title
              title={'Recommended Services Near You'}
              textAlign="center"
              fontSize={scaleFontSize(15)}
              color="white"
            />
          </View>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={recommendedServices}
            renderItem={({ item }) => {
              return (
                <View style={{ marginHorizontal: 5 }}>
                  <SingleService
                    name={item.name}
                    rating={item.rating}
                    description={item.description}
                    price={item.price}
                  ></SingleService>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
