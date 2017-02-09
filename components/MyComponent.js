import { ListView } from 'react-native';
export default class MyComponent {
  static someWords(callback) {
    return fetch('http://192.168.1.159:3001/api/names')
      .then(function(response) {
        return response.json();
      }).then(function(value){
        console.log("setting app.names " + value.names );
        callback(value)
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
