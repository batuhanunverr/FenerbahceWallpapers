import React, { Component } from "react";
import { StyleSheet,  View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Footer,
  FooterTab
} from "native-base";
import İnfo from './İnfo';
import Wallpapers from './Wallpapers';
import LogoCategory from './components/WalpapersShowComponents/LogoCategory.js';
import StadiumCategory from './components/WalpapersShowComponents/StadiumCategory.js';


export default class MainPage extends Component {
  render() {
    return (
      <Container style={styles.Container}>
      <Header style = {styles.Header}>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu'  />
            </Button>
          </Left>
          <Body>
            <Title>FENERBAHCE DUVAR KAĞITLARI</Title>
          </Body>
          <Right />
        </Header>
              
        <Content padder>
          <LogoCategory/>
          <StadiumCategory/>
        </Content>
       
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    Container: {
       backgroundColor: '#1B1655',
        flex:1,
      },
  Header: {
    backgroundColor: "#1A133A",
   
  },
  Title: {
    fontSize:13,
  },
  Bar: {
    backgroundColor: "#1A133A",
    flex:1,
  },
});


