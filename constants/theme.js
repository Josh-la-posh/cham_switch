import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen');

export const COLORS = {
    colorPrimaryDark: '#15844F',
    colorPrimaryLight: '#08EAA6',
    textColorDark: '#000',
    dangerTextColor: '#F80D0D',
    dangerBtnColor: '#F80E0E'

}

export const SIZES = {
    width: width,
    height: height,
}

const theme = {COLORS, SIZES};

export default theme;