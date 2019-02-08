import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
let Header = require('./src/components/Header').Header;
let AlbumList = require('./src/components/AlbumList').AlbumList;
// import axios from 'axios';

// const Home = () => {
//   return(
//       <View>  
//      <Header headerText= {'Albums'} />
//      {/* <AlbumList /> */}
//      </View>
//   );
// };

export default class App extends React.Component {
  // componentWillMount() {
  //   axios.get('http://rallycoding.herokuapp.com/api/music_albums')
  // }
  render() {
    return (
      <View>
      < Header headerText = {'Albums'}/>
      <AlbumList />
      </View>
    );
  }
}

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
