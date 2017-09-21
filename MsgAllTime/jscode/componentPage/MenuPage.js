'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';

import {Menu, Button} from 'fcs_easyui';

export default class MenuPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  show(view, align) {
    view.measureInWindow((x, y, width, height) => {
      let items = [
        {title: 'Search', icon: require('../icons/search.png'), onPress: () => alert('Search')},
        {title: 'Edit', icon: require('../icons/edit.png'), onPress: () => alert('Edit')},
        {title: 'Remove', icon: require('../icons/trash.png'), onPress: () => alert('Remove')},
      ];
      Menu.show({x, y, width, height}, items, {align});
    });
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button title='Start' ref='btn1' onPress={() => this.show(this.refs['btn1'], 'start')} />
          <Button title='Center' ref='btn2' onPress={() => this.show(this.refs['btn2'], 'center')} />
          <Button title='End' ref='btn3' onPress={() => this.show(this.refs['btn3'], 'end')} />
        </View>
        <View style={{height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Button title='Start' ref='btn4' onPress={() => this.show(this.refs['btn4'], 'start')} />
          <Button title='Center' ref='btn5' onPress={() => this.show(this.refs['btn5'], 'center')} />
          <Button title='End' ref='btn6' onPress={() => this.show(this.refs['btn6'], 'end')} />
        </View>
      </View>
    );
  }

}
