import { ListView } from 'react-native';
export default class MyComponent {
  static someWords(app) {
    return fetch('http://localhost:3001/api/names')
      .then(function(response) {
        return response.json();
      }).then(function(value){
        console.log("setting app.names " + value.names );
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        app.setState({namesSource: ds.cloneWithRows(value.names)});
      });
  }

  static arrayOfSentence(size) {
    let array = [];
    for (let i=0; i <= size ; i++){
      array[i] = "homer simspon rules " + i;
    }
    return array;
  }
}
