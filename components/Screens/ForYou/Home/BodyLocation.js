import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderLocation from './Location/HeaderLocation';
import WeatherLocation from './Location/WeatherLocation';
import AirLocation from './Location/AirLocation';
import WaterLocation from './Location/WaterLocation';

export default class BodyLocation extends Component {
    render() {

        return (
            <View style={styles.container}>
                <HeaderLocation />
                <WeatherLocation />
                <Text style={styles.text}>Vị trí gần bạn nhất</Text>
                <AirLocation />
                <WaterLocation />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 16
    },
    text: {
        paddingTop: 21,
        marginLeft: 13,
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        color: '#007AFF'
    }
});