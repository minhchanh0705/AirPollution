import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList
} from 'react-native';
import { Image } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { connect } from 'react-redux';
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ListAir extends Component {
    componentDidMount() {
        axios.get(`http://5e65bb042aea440016afb33b.mockapi.io/api/airstation`)
            .then(res => {
                this.props.dispatch({
                    type: 'AIR',
                    air: res.data
                })
            })
    }
    render() {
        return (
            <FlatList
                data={this.props.Air}
                renderItem={({ item }) =>
                    <View style={styles.container}>
                        <View style={styles.upperContent}>
                            <View style={styles.leftTitleContents}>
                                <Image
                                    style={styles.img}
                                    source={require('../../../../../Assets/Icons/Type/Air.png')} />
                                <View style={styles.leftTxt}>
                                    <Text style={styles.txt1}>{item.name}</Text>
                                    <Text style={styles.txt2}>{item.near}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={styles.icon}>
                                    <Image
                                        style={styles.imgRight}
                                        source={require('../../../../../Assets/Icons/Weather/Temp.png')} />
                                    <Text style={styles.txtRight}>{item.temp}</Text>
                                </View>
                                <View style={styles.icon}>
                                    <Image
                                        style={styles.imgRight}
                                        source={require('../../../../../Assets/Icons/Weather/Humidity.png')} />
                                    <Text style={styles.txtRight}>{item.humid}</Text>
                                </View>
                            </View>
                        </View>


                        {
                            item.condition == 'Tốt' ?
                                (
                                    <View style={styles.quality}>
                                        <View style={styles.qualityLeft}>
                                            < LinearGradient
                                                start={{ x: 1, y: 0.5 }}
                                                end={{ x: 0, y: 0.5 }}
                                                locations={[0.0, 0.99]}
                                                colors={['#00E400', '#33ff33']}
                                                style={styles.linearGradient}>
                                                <Image
                                                    style={styles.imgQuality}
                                                    source={require('../../../../../Assets/Icons/Others/Good.png')} />
                                                <View style={styles.leftQualityTxt}>
                                                    <Text style={styles.txtQuality1}>{item.data}</Text>
                                                    <Text style={styles.txtQuality2}>{item.condition}</Text>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                        <View style={styles.qualityRightGood}>
                                            <Text style={styles.txtQualityRight}>{item.description}</Text>
                                        </View>
                                    </View>
                                )
                                :
                                (
                                    item.condition == 'Khá' ?
                                        (
                                            <View style={styles.quality}>
                                                <View style={styles.qualityLeft}>
                                                    < LinearGradient
                                                        start={{ x: 1, y: 0.5 }}
                                                        end={{ x: 0, y: 0.5 }}
                                                        locations={[0.0, 0.99]}
                                                        colors={['#FFFF00', '#ffff4d']}
                                                        style={styles.linearGradient}>
                                                        <Image
                                                            style={styles.imgQuality}
                                                            source={require('../../../../../Assets/Icons/Others/Good.png')} />
                                                        <View style={styles.leftQualityTxt}>
                                                            <Text style={styles.txtQuality1}>{item.data}</Text>
                                                            <Text style={styles.txtQuality2}>{item.condition}</Text>
                                                        </View>
                                                    </LinearGradient>
                                                </View>
                                                <View style={styles.qualityRightMid}>
                                                    <Text style={styles.txtQualityRight}>{item.description}</Text>
                                                </View>
                                            </View>
                                        )
                                        :
                                        (item.condition == 'Trung Bình' ?
                                            (
                                                <View style={styles.quality}>
                                                    <View style={styles.qualityLeft}>
                                                        < LinearGradient
                                                            start={{ x: 1, y: 0.5 }}
                                                            end={{ x: 0, y: 0.5 }}
                                                            locations={[0.0, 0.99]}
                                                            colors={['#FF7E00', '#ffa64d']}
                                                            style={styles.linearGradient}>
                                                            <Image
                                                                style={styles.imgQuality}
                                                                source={require('../../../../../Assets/Icons/Others/Good.png')} />
                                                            <View style={styles.leftQualityTxt}>
                                                                <Text style={styles.txtQuality1}>{item.data}</Text>
                                                                <Text style={styles.txtQuality2}>{item.condition}</Text>
                                                            </View>
                                                        </LinearGradient>
                                                    </View>
                                                    <View style={styles.qualityRightLow}>
                                                        <Text style={styles.txtQualityRight}>{item.description}</Text>
                                                    </View>
                                                </View>
                                            )
                                            :
                                            (
                                                <View style={styles.quality}>
                                                    <View style={styles.qualityLeft}>
                                                        < LinearGradient
                                                            start={{ x: 1, y: 0.5 }}
                                                            end={{ x: 0, y: 0.5 }}
                                                            locations={[0.0, 0.99]}
                                                            colors={['#FF0000', '#ff4d4d']}
                                                            style={styles.linearGradient}>
                                                            <Image
                                                                style={styles.imgQuality}
                                                                source={require('../../../../../Assets/Icons/Others/Good.png')} />
                                                            <View style={styles.leftQualityTxt}>
                                                                <Text style={styles.txtQuality1}>{item.data}</Text>
                                                                <Text style={styles.txtQuality2}>{item.condition}</Text>
                                                            </View>
                                                        </LinearGradient>
                                                    </View>
                                                    <View style={styles.qualityRightBad}>
                                                        <Text style={styles.txtQualityRight}>{item.description}</Text>
                                                    </View>
                                                </View>
                                            )
                                        )
                                )
                        }

                    </View>
                }
                keyExtractor={item => item.id + ''}>
            </FlatList>
        );
    }
}
function mapStatetoProps(state) {
    return {
        Air: state.air
    };
}
export default connect(mapStatetoProps)(ListAir);
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
        paddingHorizontal: 12,
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
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgRight: {
        width: 13,
        height: 13
    },
    leftTxt: {
        marginLeft: 5
    },
    txt1: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 20
    },
    txt2: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 13,
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
    qualityRightGood: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#00E400',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    qualityRightMid: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFF00',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    qualityRightLow: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#FF7E00',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    qualityRightBad: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#FF0000',
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
