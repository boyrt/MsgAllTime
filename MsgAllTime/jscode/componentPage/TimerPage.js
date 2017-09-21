import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

//https://github.com/ocetnik/react-native-background-timer
import BackgroundTimer from 'react-native-background-timer';

export default class TimerPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : `${navigation.state.params.pageTitle}`,
    });


    constructor(props){
        super(props);

        const timeoutId = BackgroundTimer.setTimeout(() => {
            alert("Timer");
            BackgroundTimer.clearTimeout(timeoutId);
        }, 10000);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textItem}>因系统提供的定时器，在APP进入后台时，定时器速度加快或停止。详情请查看代码</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30,
        marginRight:30,
    },
    textItem:{
        textAlign:'center'
    }

});

