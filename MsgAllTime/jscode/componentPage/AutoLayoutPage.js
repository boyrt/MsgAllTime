import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {AutoExpandingTextInput} from 'fcs_easyui';

export default class AutoLayoutPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : `${navigation.state.params.pageTitle}`,
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textItem}>根据输入字段，可以自动调整输入框的高度:</Text>
                <View style={styles.autoItem}>
                    <AutoExpandingTextInput
                        placeholder="height increases with content"
                        enablesReturnKeyAutomatically={true}
                        returnKeyType="done"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    },
    autoItem : {
        backgroundColor : '#4a4a4a',
        margin : 10,
    },
    textItem:{
        margin : 10,

    }

});

