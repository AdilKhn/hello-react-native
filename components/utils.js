const Client  = require('node-rest-client').Client;
export default class Utils {

  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static getUrlData(callback) {
    let client = new Client();
    client.get('http://127.0.0.1:3001/api/names', 
      function(data) {
        callback(data);
      })
  }

  static postUrlData(value, callback){
    let client = new Client();
    var args = {
      data: { name: value },
      headers: { "Content-Type": "application/json" }
    };

    client.post("http://127.0.0.1:3001/api/name", args, function (data, response) {
      // parsed response body as js object
      console.log(data);
      // raw response
      console.log(response);
    });


  }
}
