import { StyleSheet, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { neutral, primary } from 'styles/colors';

const SearchIcon = ({ type = 'Light', color, size }) => {
    const getColor = () => {
        if (color) return color;
        switch (type) {
            case 'Light':
                return neutral[60];
            case 'Bold':
                return primary[50];
        }
    };

    return (
        <View style={[{ width: size, height: size }, styles.icon]}>
            {type === 'Light' ? (
                <Svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <Path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M10.1108 0C4.79246 0 0.481092 4.20819 0.481092 9.39926C0.481092 14.5903 4.79246 18.7985 10.1108 18.7985C12.3854 18.7985 14.4759 18.0287 16.1236 16.7415L19.2536 19.7886L19.3368 19.8586C19.6275 20.0685 20.0394 20.0446 20.3024 19.7873C20.5916 19.5043 20.591 19.0459 20.301 18.7636L17.2078 15.7523C18.7806 14.0794 19.7405 11.8487 19.7405 9.39926C19.7405 4.20819 15.4292 0 10.1108 0ZM10.1108 1.44774C14.61 1.44774 18.2573 5.00776 18.2573 9.39926C18.2573 13.7908 14.61 17.3508 10.1108 17.3508C5.61163 17.3508 1.96433 13.7908 1.96433 9.39926C1.96433 5.00776 5.61163 1.44774 10.1108 1.44774Z'
                        fill={getColor()}
                    />
                </Svg>
            ) : (
                <Svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <Path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0.481079 8.66993C0.481079 3.88166 4.32868 0 9.07494 0C11.3542 0 13.5401 0.913436 15.1517 2.53936C16.7634 4.16529 17.6688 6.37052 17.6688 8.66993C17.6688 13.4582 13.8212 17.3399 9.07494 17.3399C4.32868 17.3399 0.481079 13.4582 0.481079 8.66993ZM17.5266 15.6543L20.0861 17.7164H20.1305C20.6484 18.2388 20.6484 19.0858 20.1305 19.6082C19.6127 20.1306 18.7732 20.1306 18.2553 19.6082L16.1313 17.1785C15.9305 16.9766 15.8176 16.7024 15.8176 16.4164C15.8176 16.1304 15.9305 15.8562 16.1313 15.6543C16.5186 15.2704 17.1393 15.2704 17.5266 15.6543Z'
                        fill={getColor()}
                    />
                </Svg>
            )}
        </View>
    );
};

export default SearchIcon;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
