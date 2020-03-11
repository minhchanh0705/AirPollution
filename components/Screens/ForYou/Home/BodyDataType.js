import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
class BodyDataTypes extends Component {
    constructor(props) {
        super(props);
        this.toAirScreen = this.toAirScreen.bind(this);
        this.toWaterScreen = this.toWaterScreen.bind(this);
    }
    toAirScreen() {
        this.props.navigation.navigate('AirQualityScreen');
    }
    toWaterScreen() {
        this.props.navigation.navigate('WaterQualityScreen');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Loại dữ liệu môi trường</Text>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.toAirScreen} style={styles.btn}>
                        <Image
                            style={styles.img}
                            source={require('../../../../Assets/Icons/Type/Air.png')} />
                        <Text style={styles.buttonText}>Không khí</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toWaterScreen} style={styles.btn}>
                        <Image
                            style={styles.img}
                            source={require('../../../../Assets/Icons/Type/Water.png')} />
                        <Text style={styles.buttonText}>Nguồn nước</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.btn_book} style={styles.btn}>
                        <Image
                            style={styles.img}
                            source={require('../../../../Assets/Icons/Type/Book.png')} />
                        <Text style={styles.buttonText}>Cẩm nang</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default withNavigation(BodyDataTypes);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 24
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 18
    },
    img: {
        width: 65,
        height: 65
    },
    text: {
        paddingTop: 14,
        paddingLeft: 20,
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 24,
        color: '#000000'
    },
    buttonText: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        color: '#000000'
    }
});