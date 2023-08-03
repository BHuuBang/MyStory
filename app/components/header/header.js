import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={{height:60,borderWidth:1,justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity>
                    
                </TouchableOpacity>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}
export default Header;