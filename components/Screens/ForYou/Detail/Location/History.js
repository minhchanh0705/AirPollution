import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import Option from './Option';
import Graph from './Graph';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class History extends Component {
    render() {
        return (
            <View style={styles.history}>
                <View style={styles.subtitle}>
                    <Text style={styles.sub}>Dữ liệu lịch sử</Text>
                </View>
                <Option />
                <Graph />
            </View>
        );
    }
}
export default withNavigation(History);
const styles = StyleSheet.create({
    history:{
        flexDirection:'column',
        alignItems:'center'
    },
    subtitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    },
    sub: {
        fontFamily: 'SF Pro Text',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#000000',
    }
});
