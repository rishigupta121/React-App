import React, {Component} from 'react';
import { View, Text } from 'react-native';
let AlbumDetail = require('./AlbumDetail').AlbumDetail;

class AlbumList extends Component{
    state = { albums: []};
      componentWillMount(){
        // callback function
        return fetch('http://rallycoding.herokuapp.com/api/music_albums')
             .then(response => response.text().then((result) => {
                         this.setState({
                             albums: JSON.parse(result)
                         })
                     })
                );
                //  .then(function (response) {
                //      console.log(response.json());
                //          return response.json();
                //      })
                //      .then(function (myJson) {
                //           console.log(JSON.stringify(myJson));
                //      });
                 //this.setState({ albums: response.json()})

    }
        renderAlbums() {
            return this.state.albums.map(album => <AlbumDetail key = {album.title} album = {album}/>);
           
        }
    render(){
    return (
        <View>
             {this.renderAlbums()}
        </View>
    );
    }
}

module.exports={
    AlbumList: AlbumList
}

