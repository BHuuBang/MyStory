import React from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: 16,
        }}>
        <TextInput placeholder="Enter text here"/>
        <View></View>
        <Text
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          Home Screen
        </Text>
      </View>
    );
  }
}
export default Home;
