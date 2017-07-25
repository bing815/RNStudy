import React from 'react';
import { TabNavigator } from 'react-navigation';

import RecentChatsScreen from './pages/tabs/tab1'
import AllContactsScreen from './pages/tabs/tab2'
import tab3 from './pages/tabs/tab2'

const RNStudy = TabNavigator({
        Recent: { screen: RecentChatsScreen },
        All: { screen: AllContactsScreen },
    },{
    	tabBarOptions:{
    	showIcon:true,
    },
    tabBarPosition:'bottom'
    }
);

module.exports=RNStudy