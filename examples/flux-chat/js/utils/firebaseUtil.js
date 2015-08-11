/* Firebase messageStore */
var Firebase = require('firebase');
firebaseUtil = {
  getRefByPath: function(path){
    return new Firebase('https://blistering-inferno-2653.firebaseio.com/' + path);
  },
  registerPath: function(path, callback){
    this.getRefByPath(path).on('value', 
      function(data){
        console.log(path, 'callback got', data.val());
        var objs = data.val();
        var array = [];
        for (var key in objs){
          array.push(objs[key]);
        }
        callback(array);
      });
  },
  set: function(path,data){
    this.getRefByPath(path).set(data);
  },
  push: function (path,data,callback) {
    console.log(path,'pushing',data);
    this.getRefByPath(path).push(data);
  }
};

module.exports = firebaseUtil;
window.fbu = firebaseUtil;