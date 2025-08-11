import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MainScreenStyle from '../module/main/MainStyle';
import { getFontFamily } from '../../assets/fonts/helper';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MainStyleConstant } from '../../constants/styleConstant';

const SingleService = (props) => {
  return (
    <View style={MainScreenStyle.singleServiceStyle}>
      <View>
        <View style={[MainScreenStyle.singleServiceImageStyle,{marginBottom:10}]}/>
        <Text style={{ fontFamily: getFontFamily('Inter', 'Bold') }}>
          {props.name}
        </Text>
        <Text>RM{props.price} per hour</Text>
        <Text numberOfLines={2}>{props.description}</Text>
        <View
          style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}
        >
          <Text style={{ marginRight: 5 }}>{props.rating}/5</Text>
          {[...Array(props.rating)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              color="#FFD700"
              size={15}
            />
          ))}
        </View>
      </View>
         <Pressable style={{ alignSelf: 'flex-end', backgroundColor:MainStyleConstant.MAIN_COLOR,padding:10}}>
        <Text style={{fontWeight:'800', color:'white'}}>Book Now</Text>
      </Pressable>
    </View>
  );
};

export default SingleService;
