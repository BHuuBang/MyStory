import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1, margin: 8}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Wednesday, August 2nd, 2023
        </Text>
        <View style={{flex:1}}><TextInput
          placeholder={`How was your today?`}
          multiline={true}
          returnKeyType="go"
          style={{alignSelf:'flex-start'}}
        /></View>
        
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            height: 40,
            width: 40,
            backgroundColor: 'gray',
          }}></TouchableOpacity>
      </View>
    );
  }
}
export default New;
