import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../styles/scaling";
import { MainStyleConstant } from "../../../constants/styleConstant";

const MainScreenStyle = StyleSheet.create({
    header:{
        paddingHorizontal:horizontalScale(20),
    },
    primaryTheme:{
        backgroundColor:'white',
        color:MainStyleConstant.MAIN_COLOR
    },
    mainColor:{
        backgroundColor:'#007FFF',
        color:'white'
    },
    msecondaryColor:{
        backgroundColor:'#1AFFD5'
    },
    categoriesStyle:{
        width:horizontalScale(70),
        height:verticalScale(100),
    },
    categoriesIcon:{
       width:horizontalScale(65),
        height:verticalScale(60),
    },
    singleServiceStyle:{
        backgroundColor:'white',
        width:horizontalScale(250),
        height:verticalScale(270),
        borderRadius:5,
        padding:10,
    },
    singleServiceImageStyle:{
        backgroundColor:'#DFEBF5',
        width:'100%',
        height:'50%',
    },
    bottomBackgroundSection:{
        backgroundColor:MainStyleConstant.MAIN_COLOR,
        borderTopLeftRadius: verticalScale(25),
        borderTopRightRadius: verticalScale(25),
        paddingVertical:verticalScale(3)
    }

});

export default MainScreenStyle;