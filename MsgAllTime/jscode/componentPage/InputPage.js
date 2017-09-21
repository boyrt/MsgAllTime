'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import {ListRow, Input, Label} from 'fcs_easyui';

export default class InputPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  constructor(props) {
    super(props);
    this.state={
        valueSM: null,
        valueMD: null,
        valueLG: null,
        valueReadonly: 'Readonly',
        valueDisable: 'Disable',
        valueCustom: null,
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Size sm' detail={
          <Input
            style={{width: 200}}
            size='sm'
            value={this.state.valueSM}
            placeholder='Size sm'
            onChangeText={text => this.setState({valueSM: text})}
            />
        } topSeparator='full' />
        <ListRow title='Size md' detail={
          <Input
            style={{width: 200}}
            size='md'
            value={this.state.valueMD}
            placeholder='Size md'
            onChangeText={text => this.setState({valueMD: text})}
            />
        }/>
        <ListRow title='Size lg' detail={
          <Input
            style={{width: 200}}
            size='lg'
            value={this.state.valueLG}
            placeholder='Size lg'
            onChangeText={text => this.setState({valueLG: text})}
            />
        } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Readonly' detail={
          <Input
            style={{width: 200}}
            editable={false}
            value={this.state.valueReadonly}
            />
        } topSeparator='full' />
        <ListRow title='Disabled' detail={
          <Input
            style={{width: 200}}
            disabled={true}
            value={this.state.valueDisable}
            />
        } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Custom' detail={
          <Input
            style={{width: 200, backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b', color: '#8a6d3b', textAlign: 'right'}}
            value={this.state.valueCustom}
            placeholder='Custom'
            onChangeText={text => this.setState({valueCustom: text})}
            />
        } topSeparator='full' bottomSeparator='full' />
      </ScrollView>
    );
  }

}