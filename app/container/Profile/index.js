import React from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import {WrapperContainerBase} from '../../components';
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <WrapperContainerBase>
          <View>
                <Text>Profile</Text>
            </View>
        </WrapperContainerBase>
      </View>
    );
  }
}
export default Profile;
