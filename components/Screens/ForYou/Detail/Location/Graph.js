import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Graph extends Component {
    render() {
        return (
            <View>
            </View>
        );
    }
}
export default withNavigation(Graph);
const styles = StyleSheet.create({
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
