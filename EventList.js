import React, { Component } from 'react';
import {FlatList,Text,StyleSheet,View} from 'react-native';//<=Import Flatlist
import EventCard from './EventCard'
import {navigationOptions} from 'react-navigation'
import ActionButton from 'react-native-action-button'

const style = StyleSheet.create({
    List:{
        flex:1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    },
});

class EventList extends Component //Define class EventList.
{
    static navigationOptions = {
        title:"My Events"
    };
    state={
        events:[]
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
              events: this.state.events.map(evt => ({
                ...evt,
                timer: Date.now(),
              })),
            });
          }, 1000);
          
        const events = require('./db.json').events
        this.setState({events});
    }

    handleAddEvents=()=>{
        this.props.navigation.navigate('form')
    }

    render(){ //Render things inside to screen.
        return(
            <View style={style.List}>
                <FlatList style={style.List}
                data={this.state.events}
                renderItem={({item})=><EventCard event={item}/>}
                // keyExtractor={(index,item)=>index.toString()}
                keyExtractor={(item)=>item.id}
                />
                <ActionButton
                onPress={this.handleAddEvents}
                buttonColor="rgba(231,76,60,1)"
                ></ActionButton>
            </View>
        );
    }
}

export default EventList; //Export defined class as soon as after define.
