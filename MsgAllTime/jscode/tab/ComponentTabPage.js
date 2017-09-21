import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import {ListRow} from 'fcs_easyui';

export default class ComponentTabPage extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{height: 20}} />

                <ListRow title='Label' detail='标签' onPress={() =>this.goPage('LabelPage','标签页')} />
                <ListRow title='ListRow' detail='列表行' onPress={() =>this.goPage('ListRowPage','列表页')} />
                <ListRow title='Button' detail='按钮' onPress={() =>this.goPage('ButtonPage','按钮') } />
                <ListRow title='Timer' detail='倒计时' onPress={() =>this.goPage('TimerPage','倒计时') } />
                <ListRow title='Checkbox' detail='复选框' onPress={() => this.goPage('CheckboxPage','复选框')} />
                <ListRow title='Input' detail='输入框' onPress={() => this.goPage('InputPage','输入框')} />
                <ListRow title='Select' detail='选择框' onPress={() => this.goPage('SelectRowPage','选择框')} />
                <ListRow title='Stepper' detail='步进器' onPress={() => this.goPage('StepperPage','步进器')} />
                <ListRow title='SearchInput' detail='搜索输入框' onPress={() => this.goPage('SearchInputPage','搜索输入框')} />
                <ListRow title='Badge' detail='徽章' onPress={() => this.goPage('BadgePage','徽章')} />
                <ListRow title='Popover' detail='气泡' onPress={() => this.goPage('PopoverPage','气泡')} />
                <ListRow title='NavigationBar' detail='导航栏' onPress={() => this.goPage('ListRowPage','导航栏')} />
                <ListRow title='Carousel' detail='走马灯' onPress={() => this.goPage('CarouselPage','走马灯')} />
                <ListRow title='Projector' detail='幻灯机' onPress={() => this.goPage('ProjectorPage','幻灯机')} />
                <ListRow title='SegmentedBar' detail='分段工具条' onPress={() =>this.goPage('SegmentedBarPage','分段工具条')} />
                <ListRow title='SegmentedView' detail='分段器' onPress={() => this.goPage('SegmentedViewPage','分段器')} />
                <ListRow title='TabView' detail='标签页' onPress={() => this.goPage('TabViewPage','标签页')} />
                <ListRow title='TransformView' detail='可变视图' onPress={() => this.goPage('TransformViewPage','可变视图')} />
                <ListRow title='AlbumView' detail='相册视图' onPress={() => this.goPage('AlbumViewPage','相册视图')} />
                <ListRow title='Overlay' detail='浮层' onPress={() => this.goPage('OverlayPage','浮层')} />
                <ListRow title='Toast' detail='轻提示' onPress={() =>this.goPage('ToastPage','轻提示')} />
                <ListRow title='ActionSheet' detail='操作选单' onPress={() =>this.goPage('ActionSheetPage','操作选单')} />
                <ListRow title='ActionPopover' detail='操作气泡' onPress={() => this.goPage('ActionPopoverPage','操作气泡')} />
                <ListRow title='PullPicker' detail='上拉选择器' onPress={() =>this.goPage('PullPickerPage','上拉选择器')} />
                <ListRow title='PopoverPicker' detail='气泡选择器' onPress={() =>this.goPage('PopoverPickerPage','气泡选择器')} />
                <ListRow title='Menu' detail='菜单' onPress={() => this.goPage('MenuPage','菜单')} />
                <ListRow title='Drawer' detail='抽屉' onPress={() => this.goPage('DrawerPage','抽屉')} />
                <ListRow title='AutoLayout' detail='自适应组件' onPress={() => this.goPage('AutoLayoutPage','自适应组件')} />
                <ListRow title='Loading' detail='Loading' onPress={() => this.goPage('LoadingPage','Loading')} />
                <ListRow title='Art' detail='饼图，状态图' onPress={() => this.goPage('PiePage','Art-Pie-Wedge')} />
                <ListRow title='ModalIndicator' detail='模态指示器' onPress={() => this.goPage('ModalIndicatorPage','模态指示器')} bottomSeparator='full' />
            </ScrollView>
        );
    }

    goPage=(pageName,pageTitle)=>{
        this.props.navigation.navigate(pageName,{ pageTitle: pageTitle });
    }
}
