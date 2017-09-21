import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


import QRCode from 'react-native-qrcode';

export default class QrCodePage extends Component {
    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    },

});

