import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native"
import SearchBarStyle from "./SearchBarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MainScreenStyle from "../module/main/MainStyle";
import { MainStyleConstant } from "../../constants/styleConstant";



const SearchBar = (props) => {
    return (
        <View style={SearchBarStyle.basicStyle}>
            <TextInput placeholder={props.placeholder} placeholderTextColor={MainStyleConstant.MAIN_COLOR}>
            </TextInput>
            <FontAwesomeIcon icon={faMagnifyingGlass} color={MainStyleConstant.MAIN_COLOR}/>
        </View>
    )
}

export default SearchBar;