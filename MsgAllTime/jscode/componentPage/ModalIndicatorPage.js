'use strict';

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {ListRow, ModalIndicator} from 'fcs_easyui';

export default class ModalIndicatorPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  show() {
    let secs = 5;
    ModalIndicator.show(`Close after ${secs} sec(s)`);
    let timer = setInterval(() => {
      secs--;
      ModalIndicator.show(`Close after ${secs} sec(s)`);
      if (secs < 0) {
        clearInterval(timer);
        ModalIndicator.hide();
      }
    }, 1000);
  }

  render() {
    let img = require('../images/faircup.jpg');
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Show' onPress={() => this.show()} topSeparator='full' bottomSeparator='full' />
      </ScrollView>
    );
  }

}
