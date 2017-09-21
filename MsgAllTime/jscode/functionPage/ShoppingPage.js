import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import {ListRow} from 'fcs_easyui';

export default class ShoppingPage extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{height: 20}} />
                <ListRow title='基于State购物车' detail='基于State购物车' onPress={() =>this.goPage('ShoppingCarPage','基于State购物车')} />

                <ListRow title='基于MobX购物车' detail='基于MobX购物车' onPress={() =>this.goPage('MobxShoppingCarPage','基于MobX购物车')} />
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

});

