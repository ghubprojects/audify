import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { neutral, primary } from 'styles/colors';
import { Fonts } from 'utils/enums';

const CustomButton = ({ type = 'primary', title, icon, onPress }) => {
    const getPrimaryStyle = () => {
        if (title && icon) return styles.primaryWithIcon;
        else if (title && !icon) return styles.primaryOnlyTitle;
        else if (!title && icon) return styles.primaryOnlyIcon;
    };

    const getOutlineStyle = () => {
        if (title && icon) return styles.outlineWithIcon;
        else if (title && !icon) return styles.outlineOnlyTitle;
        else if (!title && icon) return styles.outlineOnlyIcon;
    };

    const buttonStyles = {
        primary: [styles.primary, getPrimaryStyle()],
        outline: [styles.outline, getOutlineStyle()]
    };

    const textStyles = {
        primary: styles.primaryText,
        outline: styles.outlineText
    };

    return (
        <TouchableOpacity style={[styles.button, ...buttonStyles[type]]} onPress={onPress}>
            {icon && <View style={styles.icon}>{icon}</View>}
            {title && <Text style={[styles.buttonText, textStyles[type]]}>{title}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 12
    },
    // Primary Button Styles
    primary: {
        backgroundColor: primary[50]
    },
    primaryOnlyTitle: {
        paddingHorizontal: 32
    },
    primaryWithIcon: {},
    primaryOnlyIcon: {},

    // Outline Button Style
    outline: {
        flex: 1,
        borderWidth: 1,
        borderColor: primary[50],
        backgroundColor: neutral.white
    },
    outlineOnlyTitle: {
        paddingHorizontal: 32
    },
    outlineWithIcon: {},
    outlineOnlyIcon: {},

    // Text styles
    buttonText: {
        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 21
    },
    primaryText: {
        color: neutral.white
    },
    outlineText: {
        color: primary[50]
    },
    icon: {}
});

export default CustomButton;
