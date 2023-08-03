import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {WrapperContainerBase} from '../../components';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <WrapperContainerBase>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 8,
          }}>
          <TouchableOpacity style={{height: 60, width: '100%'}}>
            <Text>Enter text here</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <Text>Home Screen</Text>
          </View>

          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              backgroundColor: 'grey',
              bottom: 10,
              right: 10,
              borderRadius: 40 / 2,
            }}></TouchableOpacity>
        </View>
      </WrapperContainerBase>
    );
  }
}
export default Home;
