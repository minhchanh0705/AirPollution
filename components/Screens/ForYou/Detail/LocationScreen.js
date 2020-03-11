import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';
import NearLocation from './Location/NearLocation'
import LocationDetail from './Location/LocationDetail'
import Map from './Location/Map'
import History from './Location/History'
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LocationScreen extends Component {
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
                    <TouchableOpacity onPress={this.toForYouScreen}>
                        <MaterialCommunityIcons name='chevron-left' size={32} color='#ffffff' />
                    </TouchableOpacity>
                    <Text style={styles.title}>Location</Text>
                </View>
                <ScrollView style={styles.scrl}>

                    <NearLocation />

                    <LocationDetail />                    

                    <View style={styles.subtitle}>
                        
                    </View>
                    <Map/>
                    <History />
                </ScrollView>
            </View>
        );
    }
}
export default withNavigation(LocationScreen);
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
    },
    scrl:{
        marginBottom:100
    }   
});
