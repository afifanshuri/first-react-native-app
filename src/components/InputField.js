import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const InputField = props => {
  return (
    <View>
      <Text
        style={[
          { fontFamily: getFontFamily('Inter', 'Bold') },
          props.labelStyle,
        ]}
      >
        {props.label}
      </Text>
      <TextInput
        secureTextEntry={props.inputMode === 'password' ? true : false}
        inputMode={props.inputMode}
        style={props.inputStyle}
        onChangeText={value => {
          props.onChangeText(value);
          console.log(value);
        }}
      />
    </View>
  );
};

export default InputField;
