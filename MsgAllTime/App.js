import React, { Component } from 'react';
import {
    Image
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import ComponentTabPage from './jscode/tab/ComponentTabPage';
import FunctionTabPage from './jscode/tab/FunctionTabPage';
import ThirdPartTabPage from './jscode/tab/ThirdPartTabPage';
import NativeTabPage from './jscode/tab/NativeTabPage';

import ActionPopoverPage from './jscode/componentPage/ActionPopoverPage'
import ActionSheetPage from './jscode/componentPage/ActionSheetPage'

import AlbumViewPage from './jscode/componentPage/AlbumViewPage'
import BadgePage from './jscode/componentPage/BadgePage'
import ButtonPage from './jscode/componentPage/ButtonPage'
import CarouselPage from './jscode/componentPage/CarouselPage'
import CheckboxPage from './jscode/componentPage/CheckboxPage'
import DrawerPage from './jscode/componentPage/DrawerPage'
import InputPage from './jscode/componentPage/InputPage'
import MenuPage from './jscode/componentPage/MenuPage'
import ModalIndicatorPage from './jscode/componentPage/ModalIndicatorPage'
import MultiScrollViewPage from './jscode/componentPage/MultiScrollViewPage'
import OverlayPage from './jscode/componentPage/OverlayPage'
import PanResponderPage from './jscode/componentPage/PanResponderPage'
import PopoverPage from './jscode/componentPage/PopoverPage'
import PopoverPickerPage from './jscode/componentPage/PopoverPickerPage'
import ProjectorPage from './jscode/componentPage/ProjectorPage'
import PullPickerPage from './jscode/componentPage/PullPickerPage'
import SearchInputPage from './jscode/componentPage/SearchInputPage'
import SegmentedBarPage from './jscode/componentPage/SegmentedBarPage'
import SegmentedViewPage from './jscode/componentPage/SegmentedViewPage'
import SelectRowPage from './jscode/componentPage/SelectRowPage'
import StepperPage from './jscode/componentPage/StepperPage'
import TabViewPage from './jscode/componentPage/TabViewPage'
import LabelPage from './jscode/componentPage/LabelPage'
import ListRowPage from './jscode/componentPage/ListRowPage'
import ToastPage from './jscode/componentPage/ToastPage'
import TransformViewPage from './jscode/componentPage/TransformViewPage'
import AutoLayoutPage from './jscode/componentPage/AutoLayoutPage'
import LoadingPage from './jscode/componentPage/LoadingPage'
import PiePage from './jscode/componentPage/PiePage'
import LoadPage from './jscode/load/LoadPage'
import ShoppingPage from './jscode/functionPage/ShoppingPage'
import MobxShoppingCarPage from './jscode/shoppingcar/src/mobx/MobxShoppingCarPage'
import ShoppingCarPage from './jscode/shoppingcar/src/ShoppingCarPage'

import TimerPage from './jscode/componentPage/TimerPage'
import ParcelPage from './jscode/doubleList/ParcelPage'
import QrCodePage from './jscode/functionPage/QrCodePage'
import ScreenReaderStatusPage from './jscode/functionPage/ScreenReaderStatusPage'
import MaskedViewPage from './jscode/functionPage/MaskedViewPage'

const ComponentIcon = require('./jscode/tab/imgs/ic_tab_cart.png')
const ComponentPressIcon = require('./jscode/tab/imgs/ic_tab_cart_press.png')
const FunctionIcon = require('./jscode/tab/imgs/ic_tab_center.png')
const FunctionPressIcon = require('./jscode/tab/imgs/ic_tab_center_press.png')
const ThirdIcon = require('./jscode/tab/imgs/ic_tab_home.png')
const ThirdPressIcon = require('./jscode/tab/imgs/ic_tab_home_press.png')
const NativeIcon = require('./jscode/tab/imgs/ic_tab_order.png')
const NativePressIcon = require('./jscode/tab/imgs/ic_tab_order_press.png')

const Tab = TabNavigator({
    Component : {
        screen : ComponentTabPage,
        navigationOptions : () => TabOptions('组件', ComponentIcon, ComponentPressIcon, '组件')
    },
    FunctionTabPage : {
        screen : FunctionTabPage,
        navigationOptions : () => TabOptions('功能', FunctionIcon, FunctionPressIcon, '功能')

    },
    ThirdPart : {
        screen : ThirdPartTabPage,
        navigationOptions : () => TabOptions('第三方', ThirdIcon, ThirdPressIcon, '第三方')
    },
    Native : {
        screen : NativeTabPage,
        navigationOptions : () => TabOptions('原生', NativeIcon, NativePressIcon, '原生')
    }
}, {
    tabBarOptions : {
        activeTintColor : '#FC9831',
        inactiveTintColor : "#999",
        style : {
            backgroundColor : '#fff',
            height : 49,
            paddingTop : 0,
            borderTopWidth : 1,
            borderTopColor : '#ebebeb'
        },
        labelStyle : {
            fontSize : 10,
            marginBottom : 5,
            marginTop : 0,
        },
        indicatorStyle : {
            height : 0
        },
        showIcon : true,
        iconStyle : {
            width : 22,
            height : 22,
        }

    },
    tabBarPosition : 'bottom',
    backBehavior : 'none',
    lazy : true,
    swipeEnabled : false,
    animationEnabled : false
});

const TabOptions = (tabTitle, normalImage, selectedImage, title) => {
    const tabBarLabel = tabTitle;
    const tabBarIcon = (({ tintColor, focused }) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[ { height : 20, width : 20 }, { tintColor : tintColor } ]}
            />
        )
    });
    const headerTitle = title;
    return { tabBarLabel, tabBarIcon, headerTitle }
};

const App = StackNavigator({
    Tab : { screen : Tab },
    ActionPopoverPage:{screen:ActionPopoverPage},
    ActionSheetPage:{screen:ActionSheetPage},
    AlbumViewPage:{screen:AlbumViewPage},
    BadgePage:{screen:BadgePage},
    ButtonPage:{screen:ButtonPage},
    CarouselPage:{screen:CarouselPage},
    CheckboxPage:{screen:CheckboxPage},
    DrawerPage:{screen:DrawerPage},
    InputPage:{screen:InputPage},
    MenuPage:{screen:MenuPage},
    ModalIndicatorPage:{screen:ModalIndicatorPage},
    OverlayPage:{screen:OverlayPage},
    ProjectorPage:{screen:ProjectorPage},
    PullPickerPage:{screen:PullPickerPage},
    SearchInputPage:{screen:SearchInputPage},
    SegmentedBarPage:{screen:SegmentedBarPage},
    SegmentedViewPage:{screen:SegmentedViewPage},
    SelectRowPage:{screen:SelectRowPage},
    StepperPage:{screen:StepperPage},
    TabViewPage:{screen:TabViewPage},
    ListRowPage:{screen:ListRowPage},
    ToastPage:{screen:ToastPage},
    PopoverPage:{screen:PopoverPage},
    TransformViewPage:{screen:TransformViewPage},
    PopoverPickerPage:{screen:PopoverPickerPage},
    LabelPage:{screen:LabelPage},
    AutoLayoutPage:{screen:AutoLayoutPage},
    LoadingPage:{screen:LoadingPage},
    PiePage:{screen:PiePage},
    LoadPage:{screen:LoadPage},
    ShoppingPage:{screen:ShoppingPage},
    MobxShoppingCarPage:{screen:MobxShoppingCarPage},
    ShoppingCarPage:{screen:ShoppingCarPage},
    TimerPage:{screen:TimerPage},
    ParcelPage:{screen:ParcelPage},
    QrCodePage:{screen:QrCodePage},
    ScreenReaderStatusPage:{screen:ScreenReaderStatusPage},
    MaskedViewPage:{screen:MaskedViewPage},

});

export default App;