import { StyleSheet, View } from 'react-native';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

const GoogleIcon = ({ size = 24 }) => {
    return (
        <View style={styles.icon}>
            <Svg
                width={size}
                height={size}
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <G id='logos:google' clip-path='url(#clip0_13_13)'>
                    <Path
                        id='Vector'
                        d='M23.9264 12.2245C23.9264 11.2412 23.8466 10.5237 23.674 9.77963H12.4522V14.2176H19.0392C18.9064 15.3205 18.1893 16.9815 16.5956 18.0975L16.5733 18.2461L20.1214 20.9963L20.3672 21.0209C22.6248 18.9347 23.9264 15.8653 23.9264 12.2245Z'
                        fill='#4285F4'
                    />
                    <Path
                        id='Vector_2'
                        d='M12.4522 23.9176C15.6793 23.9176 18.3884 22.8545 20.3672 21.0209L16.5956 18.0976C15.5863 18.8018 14.2317 19.2934 12.4522 19.2934C9.29154 19.2934 6.60895 17.2074 5.65268 14.324L5.51251 14.3359L1.82312 17.1927L1.77487 17.3269C3.74033 21.2334 7.77753 23.9176 12.4522 23.9176Z'
                        fill='#34A853'
                    />
                    <Path
                        id='Vector_3'
                        d='M5.65268 14.3239C5.40036 13.5799 5.25433 12.7825 5.25433 11.9588C5.25433 11.1349 5.40036 10.3377 5.6394 9.59357L5.63272 9.4351L1.89709 6.53238L1.77487 6.59055C0.964813 8.21165 0.5 10.0321 0.5 11.9588C0.5 13.8854 0.964813 15.7058 1.77487 17.3269L5.65268 14.3239Z'
                        fill='#FBBC05'
                    />
                    <Path
                        id='Vector_4'
                        d='M12.4522 4.62403C14.6965 4.62403 16.2104 5.59402 17.0737 6.40461L20.4469 3.10928C18.3752 1.1826 15.6793 0 12.4522 0C7.77753 0 3.74033 2.68406 1.77487 6.59057L5.6394 9.59359C6.60895 6.7102 9.29153 4.62403 12.4522 4.62403Z'
                        fill='#EB4335'
                    />
                </G>
                <Defs>
                    <ClipPath id='clip0_13_13'>
                        <Rect width='24' height='24' fill='white' transform='translate(0.5)' />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
};

export default GoogleIcon;

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
