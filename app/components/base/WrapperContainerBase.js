import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import Header from '../header/header'
class WrapperContainerBase extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <Header name='Header'/>
                {this.props.children}
            </SafeAreaView>
        )
    }
}
export default WrapperContainerBase;