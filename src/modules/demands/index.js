import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableHighlight,
    Text,
    ScrollView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    BackHandler,
    Dimensions
  } from 'react-native';
import Style from './Style.js'
import { connect } from 'react-redux'
import { Routes, Color, Helper, BasicStyles } from 'common';
import SubHeader from 'modules/generic/SubHeader.js'
import Footer from 'modules/generic/Footer.js'
import Card from 'modules/generic/Card.js'
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

class Demands extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        console.log(this.props.navigation.state.params);
        return (
            <View>
                <SubHeader navigation={this.props.navigation} index={2}/>
                <ScrollView>
                <View style={{
                    height: height,
                    // flex: 1,
                    backgroundColor: '#F5F5F5',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 50
                }}>
                    <Text>
                        High demand Page
                    </Text>
                </View>
                </ScrollView>
                <Footer navigation={this.props.navigation}  index={1}/>
            </View>
        )
    }
}
export default Demands