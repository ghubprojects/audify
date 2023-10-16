import { StyleSheet, View } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

const StarOutlinedIcon = ({ size }) => {
    return (
        <View style={styles.icon}>
            <Svg
                width={size || 20}
                height={size || 20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <G id='Icons / star-outlined'>
                    <Path
                        id='Vector'
                        d='M17.7364 6.89649L12.7774 6.17579L10.5606 1.68165C10.5001 1.5586 10.4005 1.45899 10.2774 1.39844C9.96885 1.2461 9.59385 1.37305 9.43955 1.68165L7.22275 6.17579L2.26377 6.89649C2.12705 6.91602 2.00205 6.98048 1.90635 7.07813C1.79065 7.19705 1.72689 7.35704 1.72909 7.52294C1.73129 7.68884 1.79926 7.84708 1.91807 7.9629L5.50596 11.4609L4.6583 16.4004C4.63842 16.5153 4.65114 16.6335 4.695 16.7415C4.73887 16.8496 4.81213 16.9432 4.90648 17.0117C5.00083 17.0802 5.11249 17.1209 5.22881 17.1292C5.34512 17.1375 5.46143 17.113 5.56455 17.0586L10.0001 14.7266L14.4356 17.0586C14.5567 17.1231 14.6974 17.1445 14.8321 17.1211C15.172 17.0625 15.4005 16.7402 15.3419 16.4004L14.4942 11.4609L18.0821 7.9629C18.1798 7.86719 18.2442 7.74219 18.2638 7.60548C18.3165 7.26368 18.0782 6.94727 17.7364 6.89649V6.89649ZM12.9845 10.9688L13.6896 15.0762L10.0001 13.1387L6.31064 15.0781L7.01572 10.9707L4.03135 8.06055L8.15635 7.46094L10.0001 3.72462L11.8438 7.46094L15.9688 8.06055L12.9845 10.9688Z'
                        fill='#F77A55'
                    />
                </G>
            </Svg>
        </View>
    );
};

export default StarOutlinedIcon;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    }
});
