import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                onChangeText={(value) => { props.onChangeInput(value) }}
                placeholder="Type your task here ..." />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
    },
    inputText: {
        fontSize: 36,
        paddingStart: 20,
        paddingTop: 20,
        paddingEnd: 20,
        paddingBottom: 20,
    }
});