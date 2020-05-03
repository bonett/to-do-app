import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class Wrapper extends React.Component {
    render() {

        const { taskList } = this.props;

        return (
            <View style={styles.container} >
                <FlatList
                    data={taskList}
                    renderItem={({ item }) => <Text>{item}</Text>} />
            </View>
        )
    }
}

export default Wrapper

const styles = StyleSheet.create({
    container: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    }
});