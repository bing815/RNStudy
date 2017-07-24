import React from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import styles from './style'
export  default  class RecentChatsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab1',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor,focused }) => (
            <Image
                source={focused ? require('../../images/f7@2x.png') : {uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                style={[styles.icon]}
            />
        ),
    };
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin1'},
                        {key: 'Jackson2'},
                        {key: 'James3'},
                        {key: 'Joel4'},
                        {key: 'John5'},
                        {key: 'Jillian6'},
                        {key: 'Jimmy7'},
                        {key: 'Julie8'},
                        {key: 'Devin11'},
                        {key: 'Jackson12'},
                        {key: 'James13'},
                        {key: 'Joel14'},
                        {key: 'John15'},
                        {key: 'Jillian16'},
                        {key: 'Jimmy17'},
                        {key: 'Julie18'},
                        {key: 'Devin21'},
                        {key: 'Jackson22'},
                        {key: 'James23'},
                        {key: 'Joel24'},
                        {key: 'John25'},
                        {key: 'Jillian26'},
                        {key: 'Jimmy27'},
                        {key: 'Julie28'},
                        {key: 'Devin211'},
                        {key: 'Jackson212'},
                        {key: 'James213'},
                        {key: 'Joel214'},
                        {key: 'John215'},
                        {key: 'Jillian216'},
                        {key: 'Jimmy217'},
                        {key: 'Julie218'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

