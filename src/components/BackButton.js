import { faArrowLeft, faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Pressable, View } from "react-native";
import MainScreenStyle from "../module/main/MainStyle";
import { MainStyleConstant } from "../../constants/styleConstant";

const BackButton = (props) => {
    return <Pressable onPress={() => {props.onPress()}}>
        <View style={{marginBottom:15,marginTop:10}}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color={props.color}></FontAwesomeIcon>
        </View>
    </Pressable>
}

export default BackButton;