import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[{ padding: 10, backgroundColor: '#007bff', borderRadius: 5 }, props.buttonStyle]}
    >
      <Text style={[{ color: 'white', textAlign: 'center' }, props.textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );   
}

export default Button;
