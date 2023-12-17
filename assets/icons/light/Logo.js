import { StyleSheet, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

const Logo = ({ size = 40, color = 'none' }) => {
    return (
        <View style={styles.icon}>
            <Svg
                width={size}
                height={size}
                viewBox='0 0 160 160'
                fill={color}
                xmlns='http://www.w3.org/2000/svg'
            >
                <Path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M67.2002 99.1999C84.8733 99.1999 99.2002 84.8731 99.2002 67.1999C99.2002 49.5268 84.8733 35.2 67.2002 35.2C49.5271 35.2 35.2002 49.5268 35.2002 67.1999C35.2002 84.8731 49.5271 99.1999 67.2002 99.1999ZM67.2002 115.2C93.7099 115.2 115.2 93.7096 115.2 67.1999C115.2 40.6903 93.7099 19.2 67.2002 19.2C40.6905 19.2 19.2002 40.6903 19.2002 67.1999C19.2002 93.7096 40.6905 115.2 67.2002 115.2Z'
                    fill='#4838D1'
                />
                <Path
                    d='M137.6 121.6C137.6 130.437 130.437 137.6 121.6 137.6C112.764 137.6 105.6 130.437 105.6 121.6C105.6 112.764 112.764 105.6 121.6 105.6C130.437 105.6 137.6 112.764 137.6 121.6Z'
                    fill='#F77A55'
                />
            </Svg>
        </View>
    );
};

export default Logo;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
