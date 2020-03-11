import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Image } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

class AirLocation extends Component {
    constructor(props) {
        super(props);
        this.toLocationScreen = this.toLocationScreen.bind(this);
    }
    toLocationScreen() {
        this.props.navigation.navigate('LocationScreen');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.toLocationScreen}>
                    <View style={styles.info}>
                        <View style={styles.leftContents}>
                            <Image
                                style={styles.img}
                                source={require('../../../../../Assets/Icons/Type/Air.png')} />
                            <View style={styles.leftTxt}>
                                <Text style={styles.txt1}>Trạm khí Phạm Văn Đồng</Text>
                                <Text style={styles.txt2}>Quận Hoàn Kiếm (cách 5km)</Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                style={styles.imgRight}
                                source={require('../../../../../Assets/Icons/AQI/VNAQI.png')} />
                        </View>
                    </View>
                    <View style={styles.quality}>
                        <View style={styles.qualityLeft}>
                            <LinearGradient
                                start={{ x: 1, y: 0.5 }}
                                end={{ x: 0, y: 0.5 }}
                                locations={[0.0, 0.99]}
                                colors={['#00E400', '#33ff33']}
                                style={styles.linearGradient}>
                                <Image
                                    style={styles.imgQuality}
                                    source={require('../../../../../Assets/Icons/Others/Good.png')} />
                                <View style={styles.leftQualityTxt}>
                                    <Text style={styles.txtQuality1}>30</Text>
                                    <Text style={styles.txtQuality2}>Tốt</Text>
                                </View>
                            </LinearGradient>

                        </View>
                        <View style={styles.qualityRight}>
                            <Text style={styles.txtQualityRight}>Chất lượng không khí tốt, phù hợp để ra ngoài , và các hoạt động</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default withNavigation(AirLocation);
const styles = StyleSheet.create({
    container: {

    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 17,
        paddingHorizontal: 13,
    },
    img: {
        width: 36,
        height: 36
    },
    imgRight: {
        width: 56,
        height: 22,
        marginRight: 16
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
        fontSize: 15,
        lineHeight: 20
    },
    txt2: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 20,
        color: '#A2A8B3'
    },
    quality: {
        height: 111,
        flexDirection: 'row',
        paddingTop: 12
    },
    qualityLeft: {
        flex: 4,
        flexDirection: 'row'
    },
    leftQualityTxt: {
        width: 50,
        alignItems: 'center'
    },
    txtQuality1: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 40,
        color: '#FFFFFF'
    },
    txtQuality2: {
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        color: '#FFFFFF'
    },
    imgQuality: {
        width: 45,
        height: 45,
    },
    qualityRight: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#00E400',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    txtQualityRight: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 20,
        color: '#FFFFFF',
        paddingRight: 8
    },
    linearGradient: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

});