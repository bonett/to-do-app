import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Wrapper from './wrapper';

const App = () => {

  const [task, setTask] = useState();

  const textInputHandler = (value) => {
    setTask(value)
  }

  return (
    <View style={styles.container}>
      <Header onChangeInput={textInputHandler} />
      <Text>{task}</Text>
      <Wrapper />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
