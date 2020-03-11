import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
const SCREEN_WIDTH = Dimensions.get('window').width;
class ButtonAirOption extends Component {
    changeColorButton(button) {
        const { myFilerStatusAir } = this.props;
        if (button === myFilerStatusAir) return styles.airChosen;
        return styles.airNormal
    }
    changeButton(button) {
        const { myFilerStatusAir } = this.props;
        if (button === myFilerStatusAir) return styles.btnChosen;
        return styles.btnNormal
    }
    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.option}>
                    <TouchableOpacity style={this.changeButton('AQI')} onPress={() => this.setFilterStatus('FILTER_AQI')}>
                        <Text style={this.changeColorButton('AQI')}>AQI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.changeButton('PM25')} onPress={() => this.setFilterStatus('FILTER_PM25')}>
                        <Text style={this.changeColorButton('PM25')}>PM2.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.changeButton('CO')} onPress={() => this.setFilterStatus('FILTER_CO')}>
                        <Text style={this.changeColorButton('CO')}>CO</Text>                    
                    </TouchableOpacity>
                    <TouchableOpacity style={this.changeButton('OZONE')} onPress={() => this.setFilterStatus('FILTER_OZONE')}>
                        <Text style={this.changeColorButton('OZONE')}>OZONE</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        );
    }
}
function mapStatetoProps(state) {
    return {
        myFilerStatusAir: state.filterDisplayAir
    };
}
export default connect(mapStatetoProps)(ButtonAirOption);
const styles = StyleSheet.create({
    graph: {
        flexDirection:'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 25,
        justifyContent:'center',
        paddingTop:25,
        height:(SCREEN_WIDTH-55) * 0.576+97
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
        marginTop: 16,
        width: SCREEN_WIDTH - 32,
        backgroundColor: '#ffffff'
    },
    btnNormal:{
        borderRadius: 16,
        borderColor: '#007AFF',
        width:82,
        height:32,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnChosen:{
        borderRadius: 16,
        borderColor: '#007AFF',
        width:82,
        height:32,
        backgroundColor:'#007AFF',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    airChosen: {
        color: '#ffffff',
        paddingVertical: 2,
        justifyContent: 'center',
        fontFamily: 'SF Compact Display',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 24
    },
    airNormal: {
        color: '#007AFF',
        paddingVertical: 2,
        justifyContent: 'center',
        fontFamily: 'SF Compact Display',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 24
    },
    img: {
        height: (SCREEN_WIDTH-55) * 0.576,
        width: SCREEN_WIDTH - 55
    }
});
