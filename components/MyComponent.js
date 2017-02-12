import { ListView } from 'react-native';
export default class MyComponent {
  static someWords(callback) {
    fetch('http://192.168.1.159:3001/api/names')
      .then(function(response) {
        return response.json();
      }).then(function(value){
        console.log("setting app.names " + value.names );
        callback(value)
      });
  }

  static addName(value,callback) {
    fetch('http://192.168.1.159:3001/api/name', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value
      })
    }).then(function(response){
      return response.json();
    }).then(function(value){
      console.log('CALLBACK:');
      console.log(value);
      callback(value);
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
