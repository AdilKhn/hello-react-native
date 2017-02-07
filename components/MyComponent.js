export default class MyComponent {

  static someWords() {
    return fetch('http://localhos:3001/api/names')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.names.toString();
      })
      .catch((error) => {
        console.error(error);
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
