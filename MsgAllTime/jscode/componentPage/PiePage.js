import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

import { Pie, Wedge } from 'fcs_easyui';

export default class PiePage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title : `${navigation.state.params.pageTitle}`,
    });

    render() {
        return (
            <ScrollView>
                <View>
                    <View style={styles.itemContainer}>
                        <View style={styles.viewItem}>
                            <Pie
                                radius={50}
                                series={[10, 20, 30, 40]}
                                colors={['red', 'lime', 'blue', 'yellow']}/>
                        </View>

                        <View style={styles.viewItem}>
                            <Pie
                                radius={50}
                                innerRadius={30}
                                series={[10, 20, 30, 40]}
                                colors={['#f00', '#0f0', '#00f', '#ff0']}/>
                        </View>

                    </View>


                    <View style={styles.itemContainer}>
                    <View style={styles.viewItem}>
                        <View>
                            <Pie
                                radius={50}
                                innerRadius={45}
                                series={[60]}
                                colors={['#f00']}
                                backgroundColor='#ddd'/>
                            <View style={styles.gauge}>
                                <Text style={styles.gaugeText}>60%</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.viewItem}>
                        <Wedge
                            outerRadius={70}
                            innerRadius={50}
                            startAngle={10}
                            endAngle={100}
                            fill='#0f0'
                        />
                    </View>
                    </View>

                    <Wedge
                        outerRadius={70}
                        innerRadius={0}
                        startAngle={10}
                        endAngle={240}
                        fill='red'
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
    },
    gauge : {
        position : 'absolute',
        width : 100,
        height : 100,
        alignItems : 'center',
        justifyContent : 'center',
    },
    gaugeText : {
        backgroundColor : 'transparent',
        color : '#000',
        fontSize : 24,
    },
    viewItem : {
        width : Dimensions.get('window').width / 2,
        justifyContent : 'center',
        alignItems : 'center',
    },
    itemContainer:{
        flexDirection : 'row',
        paddingTop:20,
    }

});

