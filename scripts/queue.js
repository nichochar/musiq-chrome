// Storage is a one key value (string:string) pair
// We have one object: songQueue
// The most recent song is at the end
// The next song to be played is at the beginning

function Queue = function() {
  // Checks for browser support of the localStorage
	this._checkBrowserSupport = function() {
		if (typeof(localStorage) == 'undefined' ) {
			alert('Your browser does not support HTML5 localStorage. Musiq won\'t work properly. Try upgrading :).');
		} else {
			return true;
		}
	};

	this._initializeDB = function() {
		// If the DB doesn't exist, creates it and returns true
		// else returns null
		if (localStorage['songQueue'] === undefined) {
			var emptyQueue = '{"queue":[]}';
			localStorage['songQueue'] = emptyQueue;
			return true;
		}
		else {
			return null;
		}
	};

	this.getQueue = function() {
		// Returns the queue as an ordered list of song objects
		this._initializeDB();
		var result = JSON.parse(localStorage['songQueue']);
		return result['queue']
	};

	this.setQueueFromList = function(jsonQueueList) {
		var stringQueue = JSON.stringify({'queue':jsonQueueList});
		localStorage['songQueue'] = stringQueue;
	};

	this.popNextSong = function() {
		// @TODO:to become pop
		// Returns the first song if it exists else null
		var queue = this.getQueue();
		if (queue[0]){
			result = queue.shift();
			this.setQueueFromList(queue);

			return result;
		}
		else {
			return null;
		}
	};

	this.getSongByIdentifier = function(identifier, value) {
		// returns a specific song chosen by an identifier and it's string value
		// If this doesn't work: returns null
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
	};

	this.addSong = function(songUrl) {
		// Adds a song object to the queue
		// The argument is a JS object
		// Returns the new queue
		var queue = this.getQueue();
        
        // Instanciate a new song object
        // TODO: Check if the song object already exists in the queue
        var song = new Song(songUrl);
        
		queue.push(song);
		this.setQueueFromList(queue);
		return queue;
	};

	this.removeSong = function(index) {
		// Removes the song at the index passed as a parameter
		// Returns the new queue
		var queue = this.getQueue();
		try {
			queue.splice(index,1);
			this.setQueueFromList(queue);
			return queue;
		}
		catch(errorCode) {
			return false
		}
	};
	
	// Init setup
	if (this._checkBrowserSupport())
		this._initializeDB();
}
