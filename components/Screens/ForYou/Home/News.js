import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import axios from 'axios';
import { connect } from 'react-redux';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class News extends Component {
    componentDidMount() {
        axios.get(`http://5e65bb042aea440016afb33b.mockapi.io/api/news`)
            .then(res => {
                this.props.dispatch({
                    type: 'NEWS',
                    news: res.data
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.News}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                    numColumns={2}
                    renderItem={({ item }) =>

                        <View style={styles.news}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.img}
                                    source={require('../../../../Assets/News/news.png')} />
                                <Text style={styles.title}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>

                    }
                    keyExtractor={item => item.id + ''}>
                </FlatList>
            </View>
        );
    }
}

function mapStatetoProps(state) {
    return {
        News: state.news
    };
}
export default connect(mapStatetoProps)(News);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        marginTop: 25
    },
    news: {
        width: 179,
        height: 209,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
        marginRight: 24,
        marginBottom: 23
    },
    img: {
        height: 137,
    },
    title: {
        fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
        color: '#101426',
        paddingHorizontal: 12,
        paddingTop: 6
    }
});

