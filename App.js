import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Wrapper from './wrapper';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      taskList: [],
      text: ''
    }
  }

  createNewTask = () => {
    this.setState(prevState => ({
      taskList: [...prevState.taskList, prevState.text],
      text: '',
    }));
  }

  textInputHandler = (value) => {
    this.setState({ text: value });
  }

  render() {
    const { text, taskList } = this.state;
    return (
      <View style={styles.container}>
        <Header
          onChangeInput={this.textInputHandler}
          onPressTask={this.createNewTask}
          text={text} />
        <Wrapper taskList={taskList} />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
