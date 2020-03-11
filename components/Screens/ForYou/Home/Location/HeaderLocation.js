import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Image } from 'react-native-elements';

export default class HeaderLocation extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.leftContents}>
                    <Image
                        style={styles.img}
                        source={require('../../../../../Assets/Icons/Others/GPS.png')} />
                    <View style={styles.leftTxt}>
                        <Text style={styles.txt1}>Hà Nội</Text>
                        <Text style={styles.txt2}>Nhiều mây, u ám</Text>
                    </View>
                </View>
                <View style={styles.rightContents}>
                    <Image
                        style={styles.img}
                        source={require('../../../../../Assets/Icons/Weather/Rain.png')} />
                    <Text style={styles.txtRight}>18°C</Text>
                    <Image
                        style={styles.img}
                        source={require('../../../../../Assets/Icons/Weather/Humidity.png')} />
                    <Text style={styles.txtRight}>20%</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 17,
        paddingHorizontal: 13,

    },
    img: {
        width: 36,
        height: 36
    },
    leftContents: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftTxt: {
        flexDirection: 'column',
        marginLeft: 10
    },
    txt1: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20
    },
    txt2: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#A2A8B3'
    },
    rightContents: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#EDF1F7'
    },
    txtRight: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24
    }
});