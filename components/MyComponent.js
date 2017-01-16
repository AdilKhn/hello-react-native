export default class MyComponent {

  static someWords() {
  
    return "These are words from a javascript class. They could come from some rest call to a webservice that talks to a databasle";
  }

  static arrayOfSentence(size) {
    let array = [];
    for (let i=0; i <= size ; i++){
      array[i] = "homer simspon rules " + i;
    }
    return array;
  }
}
