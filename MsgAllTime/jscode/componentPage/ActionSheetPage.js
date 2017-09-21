'use strict';

import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import {ListRow, ActionSheet} from 'fcs_easyui';

export default class ActionSheetPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  show(modal) {
    let items = [
      {title: 'Say hello', onPress: () => alert('Hello')},
      {title: 'Do nothing'},
      {title: 'Disabled', disabled: true},
    ];
    let cancelItem = {title: 'Cancel'};
    ActionSheet.show(items, cancelItem, {modal});
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Default' onPress={() => this.show(false)} topSeparator='full' />
        <ListRow title='Modal' onPress={() => this.show(true)} bottomSeparator='full' />
      </ScrollView>
    );
  }

}
