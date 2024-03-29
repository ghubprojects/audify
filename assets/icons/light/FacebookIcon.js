import { StyleSheet, View } from 'react-native';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

const FacebookIcon = ({ size = 24 }) => {
    return (
        <View style={styles.icon}>
            <Svg
                width={size}
                height={size}
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <G id='logos:facebook' clip-path='url(#clip0_13_19)'>
                    <Path
                        id='Vector'
                        d='M23.1754 24.0001C23.9068 24.0001 24.5 23.407 24.5 22.6755V1.32459C24.5 0.592969 23.9068 0 23.1754 0H1.82459C1.09288 0 0.5 0.592969 0.5 1.32459V22.6755C0.5 23.407 1.09288 24.0001 1.82459 24.0001H23.1754Z'
                        fill='#395185'
                    />
                    <Path
                        id='Vector_2'
                        d='M17.0596 24.0001V14.706H20.1793L20.6463 11.084H17.0596V8.77133C17.0596 7.72264 17.3508 7.00799 18.8547 7.00799L20.7727 7.00714V3.76761C20.4408 3.72346 19.3023 3.62483 17.9778 3.62483C15.2124 3.62483 13.3192 5.3128 13.3192 8.41274V11.084H10.1915V14.706H13.3192V24.0001H17.0596Z'
                        fill='white'
                    />
                </G>
                <Defs>
                    <ClipPath id='clip0_13_19'>
                        <Rect width='24' height='24' fill='white' transform='translate(0.5)' />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
};

export default FacebookIcon;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
