import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import {ListRow} from 'fcs_easyui';

export default class LoadingPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });


    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{height: 20}} />

                <ListRow title='LoadPage' detail='加载动画' onPress={() =>this.goPage('LoadPage','加载动画')} />
            </ScrollView>
        );
    }


    goPage=(pageName,pageTitle)=>{
        this.props.navigation.navigate(pageName,{ pageTitle: pageTitle });
    }
}



