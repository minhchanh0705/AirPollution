import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class RankingScreen extends Component {
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
            <View elevation={20} style={styles.container}>
                <Text>RankingScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 150
    }
});
