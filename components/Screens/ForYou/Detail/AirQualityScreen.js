import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';
import NearAir from './Air/NearAir'
import ListAir from './Air/ListAir'
const SCREEN_HEIGHT = Dimensions.get('window').height;

class AirQualityScreen extends Component {
    constructor(props) {
        super(props);
        this.toForYouScreen = this.toForYouScreen.bind(this);
    }
    toForYouScreen() {
        this.props.navigation.navigate('ForYouScreen');
    }
    static navigationOptions = {
        header: () =>
            <View />
    };
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.toForYouScreen} style={styles.header} >
                        <MaterialCommunityIcons name='chevron-left' size={32} color='#ffffff' />
                    </TouchableOpacity>
                    <Text style={styles.title}>Chất lượng không khí</Text>
                </View>
                <ScrollView>
                    <NearAir />
                    <ListAir />
                </ScrollView>
            </View>
        );
    }
}
export default withNavigation(AirQualityScreen);
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        height: SCREEN_HEIGHT / 12,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'SF Compact Display',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 22,
        lineHeight: 32,
        color: '#ffffff',
        paddingLeft: 10
    }
});
