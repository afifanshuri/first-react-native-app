import React from "react";
import { getFontFamily } from "../../assets/fonts/helper";
import { Text } from "react-native";

const Title = ({title, textAlign ='center',fontSize=24,color='black'}) => {
    return (
        <Text style={{textAlign:textAlign,fontFamily:getFontFamily('Inter','Bold'),fontSize:fontSize,marginBottom:10,color:color}}>
            {title}
        </Text>
    );
};

export default Title;