import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Wrapper from './wrapper';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      taskList: ['Linux', 'Mazino', 'Karosi', 'IK'],
      text: ''
    }
  }

  createNewTask = (value) => {
    this.setState(prevState => ({
      taskList: [...prevState.taskList, prevState.text],
      text: '',
    }));
  }

  textInputHandler = (value) => {
    this.setState({ text: value });
  }

  hanldeDeleteTask = (value) => {
    const { taskList } = this.state;
    const newTaskList = taskList.filter((item) => { return item !== value });
    this.setState({ taskList: newTaskList });
  }

  render() {
    const { text, taskList } = this.state;
    return (
      <View style={styles.container}>
        <Header
          onChangeInput={this.textInputHandler}
          onPressTask={this.createNewTask}
          text={text} />
        <Wrapper
          taskList={taskList}
          deleteTask={this.hanldeDeleteTask}/>
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
