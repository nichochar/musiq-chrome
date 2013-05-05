//Storage is a one key value (string:string) pair
//We have one object: songQueue
//The most recent song is at the end
//The next song to be played is at the beginning

var localStorageDB = {
  //Checks for browser support of the localStorage
  checkBrowserSupport: function() {
    if (typeof(localStorage) == 'undefined' ) {
      alert('Your browser does not support HTML5 localStorage. Musiq won\'t work properly. Try upgrading :).');
    } else {
      return true;
    }
  },

  initializeDB: function(){
    //If the DB doesn't exist, creates it and returns true
    //else returns null
    if (localStorage['songQueue'] === undefined) {
      var emptyQueue = '{"queue":[]}';
      localStorage['songQueue'] = emptyQueue;
      return true;
    }
    else {
      return null;
    }
  },

  getJsonQueueList: function(){
    //Returns the queue as an ordered list of song objects
    this.initializeDB();
    var result = JSON.parse(localStorage['songQueue']);
    return result['queue']
  },

  writeQueueFromList: function(jsonQueueList) {
    var stringQueue = JSON.stringify({'queue':jsonQueueList});
    localStorage['songQueue'] = stringQueue;
  },

  getNextSongInQueue: function() {
    //@TODO:to become pop
    //Returns the first song if it exists else null
    var queue = this.getJsonQueueList();
    if (queue[0]){
      result = queue.shift();
      this.writeQueueFromList(queue);

      return result;
    }
    else {
      return null;
    }
  },

  getSongByIdentifier: function(identifier, value, removeSong){
    //returns a specific song chosen by an identifier and it's string value
    //The removeSong is a bool, if true then the song gets taken out of the queue
    try {
      var queue = this.getJsonQueueList();
      var result = {}
      for(var i = 0; i < queue.length; i++) {
        if (queue[i][identifier] === value) {
          if (removeSong === true){
          result = queue.splice(i)[0];
          break
          }
          else {
            result = queue[i]
            break
          }
        }
      }
      if (!$.isEmptyObject(result)){
        return result;
      }
      else{
        return null;
      }
    }
    catch(errorCode){
      return null;
    }
  },

  addSongToQueue: function(songObject) {
    //Adds a song object to the queue
    //The argument is a JS object
    var queue = this.getJsonQueueList();
    queue.push(songObject);
    this.writeQueueFromList(queue);
  }
}



//@TODO: removesongfromqueue


