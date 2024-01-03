// import React from 'react';
// import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
// import { Fonts } from 'utils/enums';
// import { neutral, primary } from 'styles/colors';
// import { useState, useEffect } from 'react';
// import * as userService from 'services/user';
// import SyncStorage from 'sync-storage';

// const UserInfo = ({ onPress, constText, userInfo }) => {
//     const [firstName, setFirstName] = useState(userInfo['firstName']);
//     const [lastName, setLastName] = useState(userInfo['lastName']);
//     const [email, setEmail] = useState(userInfo['email']);
//     const [phone, setPhone] = useState('0987654321');
//     const [dateBirth, setDateBirth] = useState('01/01/2002');
//     const [imgProfile, setImgProfile] = useState('notNullString');
//     return (
//         <View style={styles.container}>
//             <View style={styles.part}>
//                 <TextInput
//                     style={styles.text}
//                     value={userInfo['firstName']}
//                     onChangeText={(text) => setFirstName(text)}
//                 ></TextInput>
//             </View>
//             <View style={styles.part}>
//                 <TextInput
//                     style={styles.text}
//                     value={userInfo['lastName']}
//                     onChangeText={(text) => setLastName(text)}
//                 ></TextInput>
//             </View>
//             <View style={styles.part}>
//                 <TextInput
//                     style={styles.text}
//                     value={userInfo['email']}
//                     onChangeText={(text) => setEmail(text)}
//                 ></TextInput>
//             </View>
//             <View style={styles.part}>
//                 <TextInput
//                     style={styles.text}
//                     value={phone}
//                     onChangeText={(text) => setPhone(text)}
//                 ></TextInput>
//             </View>
//             <View style={styles.part}>
//                 <TextInput
//                     style={styles.text}
//                     value={dateBirth}
//                     onChangeText={(text) => setDateBirth(text)}
//                 ></TextInput>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         width: 223
//     },
//     part: {
//         height: 52,
//         textAlign: 'center',
//         borderBottomColor: '#F3F1FE',
//         borderBottomWidth: 1
//     },
//     text: {
//         fontFamily: Fonts.Poppins_400Regular,
//         fontSize: 12,
//         marginTop: 14,
//         marginLeft: 12,
//         color: neutral[80]
//     }
// });

// export default UserInfo;
