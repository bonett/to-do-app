import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Task extends React.Component {
    render() {
        const { task, index  } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{task}</Text>
                <Ionicons
                    name="md-trash"
                    size="24"
                    color="gray" />
            </View>
        )
    }
}

export default Task

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingStart: 20,
        paddingEnd: 20,
    },
    text: {
        fontSize: 24,
        paddingTop: 10,
        paddingEnd: 10,
    }
});