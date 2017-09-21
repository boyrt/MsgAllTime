'use strict';

import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {Theme, TransformView} from 'fcs_easyui';

export default class TransformViewPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  render() {
    return (
      <TransformView
        style={{backgroundColor: Theme.pageColor, flex: 1}}
        minScale={0.5}
        maxScale={2.5}
      >
        <Image style={{width: 375, height: 300}} resizeMode='cover' source={require('../images/teaset1.jpg')} />
      </TransformView>
    );
  }

}
