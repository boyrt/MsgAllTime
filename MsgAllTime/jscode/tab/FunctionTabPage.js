import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {ListRow} from 'fcs_easyui';

export default class FunctionTabPage extends Component {

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{height: 20}} />

                <ListRow title='购物车' detail='ShoppingPage' onPress={() =>this.goPage('ShoppingPage','购物车')} />

                <ListRow title='左右联动List' detail='ParcelPage' onPress={() =>this.goPage('ParcelPage','左右联动List')} />


                <ListRow title='二维码' detail='QrCodePage' onPress={() =>this.goPage('QrCodePage','二维码')} />

                <ListRow title='ScreenReaderStatusPage' detail='ScreenReaderStatusPage' onPress={() =>this.goPage('ScreenReaderStatusPage','ScreenReaderStatusPage')} />

            </ScrollView>
        );
    }


    goPage=(pageName,pageTitle)=>{
        this.props.navigation.navigate(pageName,{ pageTitle: pageTitle });
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    touch : {
        height : 44,
        justifyContent : 'center'
    }
});
