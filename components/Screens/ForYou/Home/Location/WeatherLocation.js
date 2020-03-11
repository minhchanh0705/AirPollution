import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import axios from 'axios';
import { connect } from 'react-redux';

class WeatherLocation extends Component {
    componentDidMount() {
        axios.get(`http://5e65bb042aea440016afb33b.mockapi.io/api/weather`)
            .then(res => {
                this.props.dispatch({
                    type: 'WEATHER',
                    weather: res.data
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.Weather == undefined ?
                        <View />
                        :
                        <FlatList
                            horizontal={true}
                            data={this.props.Weather}
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                            renderItem={({ item }) =>
                                <View>
                                    <Text style={styles.day}>{item.date}</Text>
                                    <Image
                                        style={styles.img}
                                        source={require('../../../../../Assets/Icons/Weather/Rain.png')} />
                                    <Text style={styles.temp}>{item.temperature}</Text>
                                </View>
                            }
                            keyExtractor={item => item.id + ''}>
                        </FlatList>
                }

            </View>
        );
    }
}
function mapStatetoProps(state) {
    return {
        Weather: state.weather
    };
}
export default connect(mapStatetoProps)(WeatherLocation);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 13,
        paddingRight: 22
    },
    day: {
        alignSelf: 'center',
        fontFamily: 'SF Pro Text',
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 16,
        color: '#007AFF'
    },
    img: {
        width: 29.9,
        height: 27.15,
        alignSelf: 'center',
    },
    temp: {
        alignSelf: 'center',
        fontFamily: 'SF Pro Text',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 24
    }
});