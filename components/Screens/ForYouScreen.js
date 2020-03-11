import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import AppHeader from './ForYou/Home/AppHeader';
import BodyLocation from './ForYou/Home/BodyLocation';
import BodyDataType from './ForYou/Home/BodyDataType';
import News from './ForYou/Home/News';

export default class ForYouScreen extends Component {
    static navigationOptions = {
        header: () =>
            <View />
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <AppHeader />
                    <BodyLocation />
                    <BodyDataType />
                    <News />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 16
    }
});
