import React, {Component} from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component{
    state = { albums: []};
    componentWillMount(){
        // callback function
        return fetch('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums:response.json()}));
    }
    render(){
        console.log(this.state);
    return (
        <View>
            <Text>Album List !!!</Text>
        </View>
    );
    }
}

module.exports={
    AlbumList: AlbumList
}

