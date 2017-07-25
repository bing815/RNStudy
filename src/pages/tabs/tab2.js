import React from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    StatusBar
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var imgSrc = 'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'

import styles from './style'

export  default  class AllContactsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab2',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor,focused }) => (
            <Image
                source={focused ? require('../../images/f7.png') : {uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                style={[styles.icon]}
            />
        ),
    };
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        /*if (!this.state.loaded) {
            return this.renderLoadingView();
        }*/

        return (
        <View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        </View>

        );
    }

    renderLoadingView()
    {
        return (<View style={styles.container} >
                <Text>Loading movies......</Text>
            </View>

        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: imgSrc}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }


}
