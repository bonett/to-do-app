import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Task extends React.Component {
    render() {
        const { task, deleteFromIcon } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{task}</Text>
                <TouchableOpacity onPress={() => deleteFromIcon(task)}>
                    <Ionicons
                        name="md-trash"
                        size={24}
                        color="gray" />
                </TouchableOpacity>
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