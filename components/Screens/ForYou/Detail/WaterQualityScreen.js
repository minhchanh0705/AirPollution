import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';
import NearWater from './Water/NearWater'
import ListWater from './Water/ListWater'
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WaterQualityScreen extends Component {
    constructor(props) {
        super(props);
        this.toForYouScreen = this.toForYouScreen.bind(this);
    }
    toForYouScreen() {
        console.log('back to home screen')
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
                    <Text style={styles.title}>Chất lượng nguồn nước</Text>
                </View>
                <ScrollView>
                    <NearWater />
                    <ListWater />
                </ScrollView>
            </View>
        );
    }
}
export default withNavigation(WaterQualityScreen);
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
