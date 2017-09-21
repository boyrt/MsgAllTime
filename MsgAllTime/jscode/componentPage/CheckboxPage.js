'use strict';

import React, {Component} from 'react';
import {View, ScrollView, Image} from 'react-native';

import {ListRow, Checkbox} from 'fcs_easyui';

export default class CheckboxPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  constructor(props) {
    super(props);
    this.state={
        checkedSM: false,
        checkedMD: false,
        checkedLG: false,
        checkedEmpty: false,
        checkedDisable: true,
        checkedCustom: false,
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Size sm' detail={
          <Checkbox
            title='Checkbox'
            size='sm'
            checked={this.state.checkedSM}
            onChange={value => this.setState({checkedSM: value})}
            />
        } topSeparator='full' />
        <ListRow title='Size md' detail={
          <Checkbox
            title='Checkbox'
            size='md'
            checked={this.state.checkedMD}
            onChange={value => this.setState({checkedMD: value})}
            />
        } />
        <ListRow title='Size lg' detail={
          <Checkbox
            title='Checkbox'
            size='lg'
            checked={this.state.checkedLG}
            onChange={value => this.setState({checkedLG: value})}
            />
        } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Empty title' detail={
          <Checkbox
            checked={this.state.checkedEmpty}
            onChange={value => this.setState({checkedEmpty: value})}
            />
        } topSeparator='full' />
        <ListRow title='Disabled' detail={
          <Checkbox
            title='Checkbox'
            disabled={true}
            checked={this.state.checkedDisable}
            onChange={value => this.setState({checkedDisable: value})}
            />
        } bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Custom' detail={
          <Checkbox
            title='Custom'
            titleStyle={{color: '#8a6d3b', paddingLeft: 4}}
            checkedIcon={<Image style={{width: 15, height: 15, tintColor: '#8a6d3b'}} source={require('../icons/checkbox_checked.png')} />}
            uncheckedIcon={<Image style={{width: 15, height: 15, tintColor: '#8a6d3b'}} source={require('../icons/checkbox_unchecked.png')} />}
            checked={this.state.checkedCustom}
            onChange={value => this.setState({checkedCustom: value})}
            />
        } topSeparator='full' bottomSeparator='full' />
      </ScrollView>
    );
  }

}
