import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Image } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

class NearWater extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Vị trí gần bạn nhất</Text>
                <View style={styles.upperContent}>
                    <View style={styles.leftTitleContents}>
                        <Image
                            style={styles.img}
                            source={require('../../../../../Assets/Icons/Others/GPS.png')} />
                        <View style={styles.leftTxt}>
                            <Text style={styles.txt1}>Phạm Văn Đồng</Text>
                            <Text style={styles.txt2}>Quận Hoàn Kiếm (cách 5km)</Text>
                        </View>
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
                        <Text style={styles.txtQualityRight}>Sử dụng tốt cho mục đích cấp nước sinh hoạt</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default withNavigation(NearWater);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 16,
        marginHorizontal: 16,
    },
    upperContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingTop: 12,
        backgroundColor: '#ffffff',
    },
    text: {
        paddingTop: 11,
        marginLeft: 14,
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 16,
        color: '#007AFF'
    },
    leftTitleContents: {
        flexDirection: 'row'
    },
    img: {
        width: 36,
        height: 36
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
    txtRight: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 15,
        lineHeight: 20
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
