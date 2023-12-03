import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const CustomLoginInput = ({placeholder, onChangeText}) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} style={styles.input} onChangeText={onChangeText}/>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#F5F5FA',
            width: 295,
            height:53,
            borderRadius: 8,
            paddingHorizontal: 0,
            marginBottom: 16,

        },
        input: {
            marginLeft: 14,
        },
    }
);

export default CustomLoginInput;