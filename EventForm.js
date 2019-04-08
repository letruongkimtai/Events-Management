import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {navigationOptions} from 'react-navigation'

const styles = StyleSheet.create({
    fieldContainer:{ 
        marginTop:20,
        marginBottom: 20,
        marginRight:20,
        marginLeft:20,
        backgroundColor: '#e2e1ed',
        borderRadius: 10,

    },
    text:{
        height:40,
        margin:10,
        marginRight: 7,
        paddingLeft: 10,
        backgroundColor:'#dee1e8',
    }
})

class EventForm extends Component{
    static navigationOptions = {
        title:"Event Signup",
    };
    HandleAddPress= ()=>{
        this.props.navigation.goBack();
    }
    handleChangeTitle=(value)=>{
        this.setState({title:value});
    }
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <View style={styles.fieldContainer}>
                    <TextInput 
                        style={styles.text} 
                        placeholder="Your event"
                        spellCheck={false}
                        onChangeText={this.handleChangeTitle}
                    />
                    <TextInput 
                        style={styles.text}
                        placeholder="Times"
                        spellCheck={false}
                    />
                </View>
                <TouchableOpacity onpress={this.HandleAddPress}>
                    <Text style={{
                        marginLeft:250,
                    }}>
                        Add events
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default EventForm;