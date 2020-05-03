import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Task from './task';

class Wrapper extends React.Component {
    render() {

        const { taskList } = this.props;

        return (
            <View style={styles.container} >
                <FlatList
                    data={taskList}
                    renderItem={({ item }) => <Task task={item}/> } />
            </View>
        )
    }
}

export default Wrapper

const styles = StyleSheet.create({
    container: {
        flex: 9
    }
});