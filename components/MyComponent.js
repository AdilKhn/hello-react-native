export default class MyComponent {

  static someWords(app) {
    return fetch('http://localhost:3001/api/names')
      .then(function(response) {
        return response.json();
      }).then(function(value){
        console.log(value.names.toString());
        app.setState({names: value.names.toString()});
      });

    //     return ['homer','marge','burns','weiner'];
  }

  static arrayOfSentence(size) {
    let array = [];
    for (let i=0; i <= size ; i++){
      array[i] = "homer simspon rules " + i;
    }
    return array;
  }
}
