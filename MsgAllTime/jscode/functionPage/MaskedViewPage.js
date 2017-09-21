import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    MaskedViewIOS
} from 'react-native';

export default class MaskedViewPage extends Component {
    constructor(props){
       super(props);
       this.state={
           msg:"hello"
       };
    }

    render() {
         return (
                   <MaskedViewIOS
                         style={{ flex: 1 }}
                         maskElement={
                          <View >
                            <Text>
                             {this.state.msg}
                            </Text>
                           </View>
                         }
                      >
                         <View style={{ flex: 1, backgroundColor: 'blue' }} />
                       </MaskedViewIOS>
                 );
       }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },

});

