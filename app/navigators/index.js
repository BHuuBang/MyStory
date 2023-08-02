// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../container/Home';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
class BottomTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home1" component={Home} />
      </Tab.Navigator>
    );
  }
}

export default App;
