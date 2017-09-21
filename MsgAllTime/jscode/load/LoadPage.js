import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import BreathingLoader from './loader/BreathingLoader'
import BubblesLoader from './loader/BubblesLoader'
import CirclesLoader from './loader/CirclesLoader'
import CirclesRotationScaleLoader from './loader/CirclesRotationScaleLoader'
import ColorDotsLoader from './loader/ColorDotsLoader'
import DotsLoader from './loader/DotsLoader'
import DoubleCircleLoader from './loader/DoubleCircleLoader'
import EatBeanLoader from './loader/EatBeanLoader'
import LineDotsLoader from './loader/LineDotsLoader'
import LinesLoader from './loader/LinesLoader'
import MusicLoader from './loader/MusicLoader'
import NineCubesLoader from './loader/NineCubesLoader'
import PulseLoader from './loader/PulseLoader'
import RippleLoader from './loader/RippleLoader'
import RotationHoleLoader from './loader/RotationHoleLoader'
import TextLoader from './loader/TextLoader'
import RotationCircleLoader from './loader/RotationCircleLoader'

export default class LoadPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.pageTitle}`,
    });


    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={{height: 20}}/>
                <View style={styles.viewItem}>
                    <Text>
                        BreathingLoader
                    </Text>
                    <BreathingLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        BubblesLoader
                    </Text>
                    <BubblesLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        CirclesLoader
                    </Text>
                    <CirclesLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        CirclesRotationScaleLoader
                    </Text>
                    <CirclesRotationScaleLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        ColorDotsLoader
                    </Text>
                    <ColorDotsLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        DotsLoader
                    </Text>
                    <DotsLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        DoubleCircleLoader
                    </Text>
                    <DoubleCircleLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        EatBeanLoader
                    </Text>
                    <EatBeanLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        LineDotsLoader
                    </Text>
                    <LineDotsLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        LinesLoader
                    </Text>
                    <LinesLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        MusicLoader
                    </Text>
                    <MusicLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        NineCubesLoader
                    </Text>
                    <NineCubesLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        PulseLoader
                    </Text>
                    <PulseLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        RippleLoader
                    </Text>
                    <RippleLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        RotationHoleLoader
                    </Text>
                    <RotationHoleLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        TextLoader
                    </Text>
                    <TextLoader />
                </View>

                <View style={styles.viewItem}>
                    <Text>
                        RotationCircleLoader
                    </Text>
                    <RotationCircleLoader />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    viewItem : {
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 20,
    }

});

