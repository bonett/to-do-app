import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Header extends React.Component {
    render() {

        const { text, onPressTask, onChangeInput } = this.props;

        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.inputText}
                    onChangeText={onChangeInput}
                    placeholder="Type your task here ..."
                    onSubmitEditing={onPressTask}
                    value={text} />
            </View>
        )
    }
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