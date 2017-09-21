'use strict';

import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {ListRow, Select} from 'fcs_easyui';

export default class SelectRowPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  constructor(props) {
    super(props);
    this.items = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
    ];
    this.customItems = [
      {
        text: 'Long long long long long long long',
        value: 1,
      }, {
        text: 'Short',
        value: 2,
      }, {
        text: <Image style={{width: 40, height: 40}} source={require('../images/teaset1_s.jpg')} />,
        value: 3,
      },
    ];
    this.state={
        valueSM: null,
        valueMD: null,
        valueLG: null,
        valueAuto: null,
        valuePull: null,
        valuePopover: null,
        valueReadonly: 'Readonly',
        valueDisable: null,
        valueCustom: null,
    };
  }

  render() {
    let {valueSM, valueMD, valueLG, valueAuto, valuePull, valuePopover, valueReadonly, valueDisable, valueCustom} = this.state;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow
          title='Size sm'
          detail={
            <Select
              style={{width: 200}}
              size='sm'
              value={valueSM}
              items={this.items}
              placeholder='Select item'
              pickerTitle='Size sm'
              onSelected={(item, index) => this.setState({valueSM: item})}
              />
          } topSeparator='full' />
        <ListRow
          title='Size md'
          detail={
            <Select
              style={{width: 200}}
              size='md'
              value={valueMD}
              items={this.items}
              placeholder='Select item'
              pickerTitle='Size md'
              onSelected={(item, index) => this.setState({valueMD: item})}
              />
          } />
        <ListRow
          title='Size lg'
          detail={
            <Select
              style={{width: 200}}
              size='lg'
              value={valueLG}
              items={this.items}
              placeholder='Select item'
              pickerTitle='Size lg'
              onSelected={(item, index) => this.setState({valueLG: item})}
              />
          } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow
          title='PickerType auto'
          detail={
            <Select
              style={{width: 200}}
              size='md'
              value={valueAuto}
              items={this.items}
              placeholder='Select item'
              pickerType='auto'
              pickerTitle='PickerType auto'
              onSelected={(item, index) => this.setState({valueAuto: item})}
              />
          } />
        <ListRow
          title='PickerType pull'
          detail={
            <Select
              style={{width: 200}}
              size='md'
              value={valuePull}
              items={this.items}
              placeholder='Select item'
              pickerType='pull'
              pickerTitle='PickerType pull'
              onSelected={(item, index) => this.setState({valuePull: item})}
              />
          } />
        <ListRow
          title='PickerType popover'
          detail={
            <Select
              style={{width: 200}}
              size='md'
              value={valuePopover}
              items={this.items}
              placeholder='Select item'
              pickerType='popover'
              pickerTitle='PickerType popover'
              onSelected={(item, index) => this.setState({valuePopover: item})}
              />
          } />
        <View style={{height: 20}} />
        <ListRow
          title='Readonly'
          detail={
            <Select
              style={{width: 200}}
              placeholder='Select item'
              editable={false}
              value={valueReadonly}
              />
          } topSeparator='full' />
        <ListRow
          title='Disabled'
          detail={
            <Select
              style={{width: 200}}
              items={this.items}
              placeholder='Select item'
              disabled={true}
              value={valueDisable}
              />
          } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow
          title='Custom'
          detail={
            <Select
              style={{width: 200, backgroundColor: '#rgba(238, 169, 91, 0.1)', borderColor: '#8a6d3b'}}
              size='lg'
              value={valueCustom}
              valueStyle={{flex: 1, color: '#8a6d3b', textAlign: 'right'}}
              items={this.customItems}
              getItemValue={(item, index) => item.value}
              getItemText={(item, index) => item.text}
              iconTintColor='#8a6d3b'
              placeholder='Select item'
              pickerTitle='Custom'
              onSelected={(item, index) => this.setState({valueCustom: item.value})}
              />
          } topSeparator='full' bottomSeparator='full' />
      </ScrollView>
    );
  }

}