import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Wrapper = () => {
    return (
        <View style={styles.container}>
            <Text>Wrapper</Text>
        </View>
    )
}

export default Wrapper

const styles = StyleSheet.create({
    container: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    }
});