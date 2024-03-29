import { StyleSheet, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { primary } from 'styles/colors';

const PauseIcon = ({ size = 20, color = primary[50] }) => {
    return (
        <View style={styles.icon}>
            <Svg
                width={size}
                height={size}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                fill={color}
            >
                <Path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z' />
            </Svg>
        </View>
    );
};

export default PauseIcon;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
