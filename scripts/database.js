//Storage is a one key value (string:string) pair
//We have one object: songQueue
//The most recent song is at the end
//The next song to be played is at the beginning

var queueDB = {
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

  getQueue: function(){
    //Returns the queue as an ordered list of song objects
    this.initializeDB();
    var result = JSON.parse(localStorage['songQueue']);
    return result['queue']
  },

  setQueueFromList: function(jsonQueueList) {
    var stringQueue = JSON.stringify({'queue':jsonQueueList});
    localStorage['songQueue'] = stringQueue;
  },

  popNextSongInQueue: function() {
    //@TODO:to become pop
    //Returns the first song if it exists else null
    var queue = this.getQueue();
    if (queue[0]){
      result = queue.shift();
      this.setQueueFromList(queue);

      return result;
    }
    else {
      return null;
    }
  },

  getSongByIdentifier: function(identifier, value){
    //returns a specific song chosen by an identifier and it's string value
    //If this doesn't work: returns null
    try {
      var queue = this.getQueue();
      var result = {}
      for(var i = 0; i < queue.length; i++) {
        if (queue[i][identifier] === value) {
          return queue[i]
        }
      }
    }
    catch(errorCode){
      return null;
    }
  },

  addSongToQueue: function(songObject) {
    //Adds a song object to the queue
    //The argument is a JS object
    //Returns the new queue
    var queue = this.getQueue();
    queue.push(songObject);
    this.setQueueFromList(queue);
    return queue;
  },

  removeSongFromQueue: function(index) {
    //Removes the song at the index passed as a parameter
    //Returns the new queue
    var queue = this.getQueue();
    try {
      queue.splice(index,1);
      this.setQueueFromList(queue);
      return queue;
    }
    catch(errorCode) {
      return false
    }
  }
}

