import { StyleSheet, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { neutral, primary } from 'styles/colors';

const HomeIcon = ({ type = 'Light', color, size }) => {
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
                        d='M18.8551 5.65923C19.5264 6.17823 19.9382 6.94923 20.0083 7.78823L20.0183 7.98923V16.0982C20.0183 18.1882 18.3642 19.8882 16.2913 19.9982H14.2975C13.3447 19.9792 12.5743 19.2392 12.5042 18.3092L12.4941 18.1682V15.3092C12.4941 14.9982 12.2627 14.7392 11.9531 14.6882L11.8629 14.6782H9.1869C8.86729 14.6882 8.6068 14.9182 8.56673 15.2182L8.55671 15.3092V18.1592C8.55671 18.2182 8.54569 18.2882 8.53667 18.3382L8.52665 18.3592L8.51563 18.4282C8.39641 19.2792 7.69508 19.9282 6.82344 19.9892L6.69319 19.9982H4.89981C2.80586 19.9982 1.09263 18.3592 0.982422 16.2982V7.98923C0.991439 7.13823 1.36314 6.34823 1.98431 5.79823L8.22608 0.788233C9.49848 -0.220767 11.2818 -0.260767 12.5933 0.668233L12.7546 0.788233L18.8551 5.65923ZM18.6147 16.2582L18.6257 16.0982V7.99823C18.6147 7.56923 18.4353 7.16823 18.1248 6.86923L17.9945 6.75823L11.883 1.87823C11.1215 1.26823 10.0395 1.23923 9.23799 1.76823L9.08671 1.87823L2.99522 6.77923C2.64556 7.03823 2.43516 7.42823 2.38507 7.83823L2.37405 7.99823V16.0982C2.37405 17.4282 3.41601 18.5182 4.73951 18.5982H6.69319C6.91361 18.5982 7.10397 18.4492 7.13302 18.2392L7.15406 18.0592L7.16408 18.0082V15.3092C7.16408 14.2392 7.98563 13.3692 9.03761 13.2882H11.8629C12.934 13.2882 13.8056 14.1092 13.8868 15.1592V18.1682C13.8868 18.3782 14.037 18.5592 14.2374 18.5982H16.0999C17.4425 18.5982 18.5345 17.5692 18.6147 16.2582Z'
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
                        d='M7.62931 18.7733V15.7156C7.62931 14.9351 8.26791 14.3023 9.05566 14.3023H11.9353C12.3136 14.3023 12.6763 14.4512 12.9438 14.7163C13.2113 14.9813 13.3616 15.3408 13.3616 15.7156V18.7733C13.3592 19.0978 13.4876 19.4099 13.7184 19.6402C13.9491 19.8705 14.2631 20 14.5906 20H16.5552C17.4727 20.0023 18.3535 19.6428 19.0032 19.0008C19.6528 18.3588 20.0179 17.487 20.0179 16.5778V7.86686C20.0179 7.13246 19.6893 6.43584 19.1208 5.96467L12.4376 0.675869C11.2751 -0.251438 9.60938 -0.221498 8.48153 0.746979L1.95083 5.96467C1.35544 6.42195 0.99958 7.12064 0.981995 7.86686V16.5689C0.981995 18.4639 2.5323 20 4.4447 20H6.36444C7.04465 20 7.59747 19.4562 7.6024 18.7822L7.62931 18.7733Z'
                        fill={getColor()}
                    />
                </Svg>
            )}
        </View>
    );
};

export default HomeIcon;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});