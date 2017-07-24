/**
 * Created by Bing on 2017/7/24.
 */
import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import Platform from 'Platform';
console.log(Platform)
var marTop;
if (Platform.OS === 'ios') {
    marTop = 20;
}else{
    marTop = 0;
}
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:marTop,
        backgroundColor: '#f0f0f0',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    icon: {
        width: 26,
        height: 26,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        width:ScreenWidth,
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        backgroundColor: '#F5FCFF',
    },
});

module.exports = styles