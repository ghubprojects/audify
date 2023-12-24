import { StyleSheet, TextInput } from 'react-native';
import { neutral } from 'styles/colors';
import { Fonts } from 'utils/enums';

const CustomInput = ({ width, placeholder, value, style, onChangeText,onChange, ...props }) => {
    return (
        <TextInput
            width={width}
            placeholder={placeholder}
            value={value}
            style={[style, styles.input]}
            onChangeText={onChangeText}
            onChange={onChange}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 8,

        fontFamily: Fonts.Poppins_500Medium,
        fontSize: 14,
        lineHeight: 20,
        backgroundColor: neutral[5]
    }
});

export default CustomInput;
