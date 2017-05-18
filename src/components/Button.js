import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

export default class Button extends Component{
    render(){
        if(this.props.underlayColor){
            return <TouchableHighlight {...this.props} />
        }
        if(Platform.OS == 'android'&&Platform.Version>20){
            return <TouchableNativeFeedback {...this.props} />
        }
        return(
            <TouchableOpacity {...this.props} />
        )
    }
}
const styles = StyleSheet.create({

})
