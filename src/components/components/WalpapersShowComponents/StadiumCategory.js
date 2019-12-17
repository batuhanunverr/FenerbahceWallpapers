import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Category from './Category'

const { height, width } = Dimensions.get('window')

class StadiumCategory extends Component {

   

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
               
            
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: '#1B1655', paddingTop: 1 }}>
                            <Text style={{ fontSize: 12, fontWeight: '400', paddingHorizontal: 20 ,color:'white'}}>
                               ŞÜKRÜ SARAÇOĞLU 
                            </Text>

                            <View style={{ height: 450, marginTop: 10,marginLeft:0 }}>
                                <ScrollView 
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../../../assets/stadyum1.jpg')}
                                        name="logo1"
                                    />
                                     <Category imageUri={require('../../../assets/stadyum2.jpg')}
                                        name="logo2"
                                    />
                                       <Category imageUri={require('../../../assets/stadyum3.jpg')}
                                        name="logo3"
                                    />
                                       <Category imageUri={require('../../../assets/stadyum4.jpg')}
                                        name="logo4"
                                    />
                                       <Category imageUri={require('../../../assets/stadyum5.jpg')}
                                        name="logo5"
                                    />
                                </ScrollView>
                            </View>
                            
                        </View>
                    </ScrollView>

      
            </SafeAreaView>
        );
    }
}
export default StadiumCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});