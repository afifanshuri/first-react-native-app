import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Title from '../../components/Title';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainScreenStyle from './MainStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { getFontFamily } from '../../../assets/fonts/helper';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName } from '../../../redux/reducers/User';

const Profile = () => {
  const user = useSelector(state => state.user);
  const [name, setName] = useState(user.firstName);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[MainScreenStyle.header, { flex: 1 }]} edges={['top']}>
      <Title title="Profile" fontSize={24} textAlign="left"></Title>
      <Text style={{ fontFamily: getFontFamily('Inter', 'Bold') }}>
        Edit Your Name
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
          width: '100%',
        }}
      >
        <TextInput
          style={{ width: '95%' }}
          value={name}
          onChange={value => {
            setName(value.nativeEvent.text);
            console.log(name);
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateFirstName({ firstName: name }));
          }}
        >
          <FontAwesomeIcon icon={faCheck} size={20}></FontAwesomeIcon>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
