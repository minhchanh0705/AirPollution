import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Map extends Component {
    render() {
        return (
            <View>
                <View style={styles.subtitle}>
                    <Text style={styles.sub}>Vị trí trên bản đồ</Text>
                </View>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={require('../../../../../Assets/Icons/Map/Map.png')} />
                </View>
            </View>
        );
    }
}
export default withNavigation(Map);
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
    },
    image: {
        borderRadius: 10,
        marginTop: 16,
        marginHorizontal: 16,
        paddingHorizontal: 6
    },
    img: {
        height: SCREEN_WIDTH * 0.57,
        width: SCREEN_WIDTH - 44
    }
});
