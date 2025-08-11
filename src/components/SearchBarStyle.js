import { StyleSheet } from "react-native";
import { horizontalScale } from "../styles/scaling";
import { MainStyleConstant } from "../../constants/styleConstant";

const SearchBarStyle = StyleSheet.create({
    basicStyle:{
        borderRadius:80,
        borderColor:MainStyleConstant.MAIN_COLOR,
        borderWidth:1,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(15),
        color:'#007FFF',
    }
});

export default SearchBarStyle;