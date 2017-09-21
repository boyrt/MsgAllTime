'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';

import {ActionPopover, Button} from 'fcs_easyui';

export default class ActionPopoverPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });


  show(view) {
    view.measureInWindow((x, y, width, height) => {
      let items = [
        {title: 'Copy', onPress: () => alert('Copy')},
        {title: 'Remove', onPress: () => alert('Remove')},
        {title: 'Share', onPress: () => alert('Share')},
      ];
      ActionPopover.show({x, y, width, height}, items);
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Show' ref='apButton' onPress={() => this.show(this.refs['apButton'])} />
      </View>
    );
  }

}
