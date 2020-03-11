import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

export default class AppHeader extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.leftContent}>
                    <Image
                        style={styles.img}
                        source={require('../../../../Assets/Icons/Others/Cloud.png')} />
                    <Text style={styles.txt}>AirLotus</Text>
                </View>
                <View style={styles.date}>
                    <Text style={styles.dateTxt}>Thứ 2, ngày 10 tháng 05, 2020</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'space-between'
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 40,
        height: 40
    },
    txt: {
        marginLeft: 4,
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 18
    },
    date: {
        alignItems: 'center'
    },
    dateTxt: {
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 18
    }
});