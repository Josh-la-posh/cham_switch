import { View, Pressable, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const PrimaryButton = () => {
    const defaultButtonStyle = [styles.buttonStyle, btnStyle];
    const defaultTextStyle = [styles.buttonText, textStyle]
    return (
        <View style={btnContainer}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={defaultButtonStyle}>
                    <Text style={defaultTextStyle}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonStyle: {
        height: 75,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75
    }
})