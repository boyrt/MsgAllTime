'use strict';

import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StatusBar} from 'react-native';

import {Theme, AlbumView, Overlay} from 'fcs_easyui';

export default class AlbumViewPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });

  constructor(props) {
    super(props);
    this.images = [
      require('../images/teaset1.jpg'),
      require('../images/teaset2.jpg'),
      require('../images/teaset3.jpg'),
      require('../images/faircup.jpg'),
    ];
    this.thumbs = [
      require('../images/teaset1_s.jpg'),
      require('../images/teaset2_s.jpg'),
      require('../images/teaset3_s.jpg'),
      require('../images/faircup_s.jpg'),
    ];
  }

  onImagePress(index) {
    let pressView = this.refs['it' + index];
    pressView.measureInWindow((x, y, width, height) => {
      let overlayView = (
        <Overlay.PopView
          style={{}}
          containerStyle={{flex: 1}}
          overlayOpacity={1}
          type='custom'
          customBounds={{x, y, width, height}}
          ref={v => this.fullImageView = v}
        >
          <AlbumView
            style={{flex: 1}}
            control={true}
            images={this.images}
            thumbs={this.thumbs}
            defaultIndex={index}
            onPress={() => this.fullImageView && this.fullImageView.close()}
            />
          <StatusBar animated={false} hidden={true} />
        </Overlay.PopView>
      );
      Overlay.show(overlayView);
    });

  }

  render() {
    return (
      <View style={{padding: 20, flex: 1, flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start'}}>
        {this.thumbs.map((item, index) => (
          <View style={{width: 100, height: 100, padding: 10}} key={index}>
            <TouchableOpacity style={{flex: 1}} ref={'it' + index} onPress={() => this.onImagePress(index)}>
              <Image style={{width: null, height: null, flex: 1}} source={item} resizeMode='cover' />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }

}
/*
      {uri: 'https://b-ssl.duitang.com/uploads/item/201207/23/20120723200549_ZhRre.thumb.700_0.jpeg'},
      {uri: 'https://b-ssl.duitang.com/uploads/item/201207/23/20120723200511_8ihrP.thumb.700_0.jpeg'},
      {uri: 'https://b-ssl.duitang.com/uploads/item/201207/23/20120723200118_acfUi.thumb.700_0.jpeg'},
      {uri: 'http://img.warting.com/allimg/2017/0308/exsaicsvc5w-92.jpg'},
      {uri: 'http://img.warting.com/allimg/2017/0308/o4ovnsq2uqj-96.jpg'},
*/