import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { connect } from 'react-redux';
import ButtonAirOption from './ButtonAirOption';
const SCREEN_WIDTH = Dimensions.get('window').width;
class Option extends Component {
    changeColorButton(button) {
        const { myFilerStatus } = this.props;
        if (button === myFilerStatus) return styles.timelineChosen;
        return styles.timelineNormal
    }
    changeOption(button) {
        const { myFilerStatus } = this.props;
        if (button === myFilerStatus) return styles.optionChosen;
        return styles.optionNormal
    }
    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.option}>
                    <TouchableOpacity style={this.changeOption('FIFTHTEEN')} onPress={() => this.setFilterStatus('FILTER_FIFTHTEEN')}>
                        <Text style={this.changeColorButton('FIFTHTEEN')}>15 ngày qua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.changeOption('THIRTY')} onPress={() => this.setFilterStatus('FILTER_THIRTY')}>
                        <Text style={this.changeColorButton('THIRTY')}>30 ngày qua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.changeOption('CUSTOM')} onPress={() => this.setFilterStatus('FILTER_CUSTOM')}>
                        <Text style={this.changeColorButton('CUSTOM')}>Tùy chọn</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.graph}>
                    <Image
                        style={styles.img}
                        source={require('../../../../../Assets/Icons/Graph/Graph.png')} />
                    <ButtonAirOption/>
                </View>
            </View>
        );
    }
}
function mapStatetoProps(state) {
    return {
        myFilerStatus: state.filterDisplay
    };
}
export default connect(mapStatetoProps)(Option);
const styles = StyleSheet.create({    
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
        marginTop: 16,
        width: SCREEN_WIDTH - 32
    },
    optionChosen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#007AFF',
        marginTop: 16,
        width: (SCREEN_WIDTH - 32)/3,
        backgroundColor: '#007AFF'
    },
    optionNormal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#007AFF',
        marginTop: 16,
        width: (SCREEN_WIDTH - 32)/3,
        backgroundColor: '#ffffff'
    },
    timelineChosen: {
        color: '#ffffff',
        paddingVertical: 2,
        justifyContent: 'center'
    },
    timelineNormal: {
        color: '#007AFF',
        paddingVertical: 2,
        justifyContent: 'center'
    },
    graph: {
        flexDirection:'column',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 25,
        alignItems:'center',
        paddingTop:25,
        height:(SCREEN_WIDTH-55) * 0.576+97
    },
    img: {
        height: (SCREEN_WIDTH-55) * 0.576,
        width: SCREEN_WIDTH - 55
    }
});
