import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LocationDetail extends Component {
    constructor(props) {
        super(props);
        this.toForYouScreen = this.toForYouScreen.bind(this);
    }
    toForYouScreen() {
        this.props.navigation.navigate('ForYouScreen');
    }
    static navigationOptions = {
        header: () =>
            <View />
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.AirForm}>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>PM2.5</Text>
                        <Text style={styles.numberOrange}>654</Text>
                        <Text style={styles.unit}>ug/m3</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>PM2.5</Text>
                        <Text style={styles.numberRed}>654</Text>
                        <Text style={styles.unit}>ug/m3</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>PM2.5</Text>
                        <Text style={styles.numberYellow}>79</Text>
                        <Text style={styles.unit}>ug/m3</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>CO</Text>
                        <Text style={styles.numberOrange}>1.06</Text>
                        <Text style={styles.unit}>ppb</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>PM2.5</Text>
                        <Text style={styles.numberGreen}>79</Text>
                        <Text style={styles.unit}>ug/m3</Text>
                    </View>
                </View>
                <View style={styles.AirForm}>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>NO2</Text>
                        <Text style={styles.numberGreen}>2.32</Text>
                        <Text style={styles.unit}>ppb</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>PM2.5</Text>
                        <Text style={styles.numberRed}>79</Text>
                        <Text style={styles.unit}>ug/m3</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>OZONE</Text>
                        <Text style={styles.numberOrange}>7.9</Text>
                        <Text style={styles.unit}>pbp</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>PM2.5</Text>
                        <Text style={styles.numberGreen}>79</Text>
                        <Text style={styles.unit}>ug/m3</Text>
                    </View>
                    <View style={styles.detailAir}>
                        <Text style={styles.title}>OZONE</Text>
                        <Text style={styles.numberYellow}>7.25</Text>
                        <Text style={styles.unit}>pbp</Text>
                    </View>
                </View>
                <View style={styles.bottomTxt}>
                    <Text style={styles.txt1}>Nguồn: Chi cục BVMT Hà Nội</Text>
                    <Text style={styles.txt2}>Cập nhật 1 giờ trước</Text>
                </View>
            </View >
        );
    }
}
export default withNavigation(LocationDetail);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 25,
        marginHorizontal: 16,
    },
    AirForm: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    detailAir: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingTop: 12
    },
    title: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 10,
        lineHeight: 16,
        color: '#A2A8B3'
    },
    numberGreen: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#27AE60'
    },
    numberRed: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#EB5757'
    },
    numberYellow: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#FFFF00'
    },
    numberOrange: {
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
        color: '#F2994A'
    },
    unit: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 8,
        lineHeight: 16,
        color: '#C5CEE0'
    },
    bottomTxt:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        paddingVertical:13,
        alignItems:'center'
    },
    txt1:{
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        color: '#000000'
    },
    txt2:{
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 8,
        lineHeight: 16,
        color: '#A2A8B3'
    },
});
