'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';

import { ListRow, Toast, Theme} from 'fcs_easyui';

export default class ToastPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  static customKey = null;

  showCustom() {
    if (ToastPage.customKey) return;
      ToastPage.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
      position: 'top',
      duration: 1000000,
    });
  }

  hideCustom() {
    if (!ToastPage.customKey) return;
    Toast.hide(ToastPage.customKey);
      ToastPage.customKey = null;
  }

  render() {
    let img = require('../images/faircup.jpg');
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Message' onPress={() => Toast.message('Toast message')} topSeparator='full' />
        <ListRow title='Success' onPress={() => Toast.success('Toast success')} />
        <ListRow title='Fail' onPress={() => Toast.fail('Toast fail')} />
        <ListRow title='Smile' onPress={() => Toast.smile('Toast smile')} />
        <ListRow title='Sad' onPress={() => Toast.sad('Toast sad')} />
        <ListRow title='Info' onPress={() => Toast.info('Toast info')} />
        <ListRow title='Stop' onPress={() => Toast.stop('Toast stop')} bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Show custom' onPress={() => this.showCustom()} topSeparator='full' />
        <ListRow title='Hide custom' onPress={() => this.hideCustom()} bottomSeparator='full' />
      </ScrollView>
    );
  }

}
