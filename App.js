import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator ,DrawerItems} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import { Icon } from 'native-base';
import MainPage from './src/components/MainPage';
import İnfo from './src/components/İnfo';
import Wallpapers from './src/components/Wallpapers';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 250, backgroundColor: '#070528', opacity: 0.9 }}>
        <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./src/assets/Fenerbahce.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />

          
        </View>
        <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color:'#FFF'}}>FENERBAHÇE DUVAR KAĞITLAR</Text>
        </View>
      </View>
      <ScrollView style={{backgroundColor:'#FFFE14'}} >
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{ alignItems: "center", bottom: 20, backgroundColor:'#FFFE14' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginRight: 15 }}>
            <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator({
  Main: {
    screen: MainPage,
    navigationOptions: {
      title: 'MainPage'
      
    },
  
  },
  İnfo: {
    screen: İnfo,
    navigationOptions: {
      title: 'İnfo'
    }
  },
  Wallpapers: {
    screen: Wallpapers,
    navigationOptions: {
      title: 'Wallpapers'
    }
  },

},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

const App = createAppContainer(Drawer);

export default App;