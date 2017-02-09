/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

import MyComponent from './components/MyComponent.js';
import _ from 'underscore';
export default class HelloReactNative extends Component {
  constructor(){
    super();
    this.names = ['a','b'];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MyComponent.arrayOfSentence(1)),
      namesSource: ds.cloneWithRows(['foo','bar'])
    };
    this.apiCallback = this.apiCallback.bind(this);
    MyComponent.someWords(this.apiCallback);
  }
 
  apiCallback(value){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({namesSource: ds.cloneWithRows(value.names)});
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    console.log('state: ' + this.state.names);
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={() => <Image source={pic} style={{width: 193, height: 110}} />}
        />
        <ListView 
          dataSource={this.state.namesSource}
          renderRow={(dataRow) => <Text>{dataRow} </Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
