Queue DB manipulation API
========================

The database.js class implements a variable called `queueDB`, which can be
called to perform operations on the queue.
This document lists the API functionalities

Index
-----
  * [Format of song object stored in DB](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#song-stored-in-db-format)
  * [Queue format](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#queue-format)
  * [Checking for Browser support](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#checking-for-browser-support)
  * [Getting the Queue](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#getting-the-queue)
  * [Writing the Queue](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#writing-the-queue)
  * [Adding a song to the queue](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#adding-a-song-to-the-end-of-the-queue)
  * [Popping a song from the queue](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#popping-a-song-from-the-queue)
  * [Removing a song from the queue](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#removing-a-song-from-the-queue)
  * [Querying for a song in the queue](https://github.com/nichochar/musiq-chrome/blob/documentation/docs/localStorageAPI.md#querying-for-a-song-in-the-queue)

Song stored in DB format
-----------------------
Example of a song, with the information we will find in the DB
```json
  {"id": 432,
   "artist":"The Doors",
   "title":"Riders on the Storm",
   "url":"http://www.youtube.com/watch?v=i_eQGsbHhDo",
   "streamUrl":"http://www.fake.com/stream-riders-doors",
   "artworkUrl":"http://www.progarchives.com/progressive_rock_discography_covers/2772/cover_15485992009.jpg",
   "provider":"youtube",
   "providerSongId":"v=i_eQGsbHhDo",
   "duration":440400
  }
```

Queue format
------------
* The queue is an ordered javascript array
* The objects are the songs
* Most recent song at the end, next song to be played at beginning

```json
  {"songQueue":
    [
      {song1},
      {song2},
      {song3}
    ]
  }
```

Checking for browser support
----------------------------
We use localStorage for storing the queue data, this can be used to check that this feature is supported on the client's browser
```javascript
queueDB.checkBrowserSupport()
```
Returns ```true``` if it works, else pops up an alertbox with the text 'Your browser does not support HTML5 localStorage. Musiq won\'t work properly. Try upgrading :).'

Getting the queue
-----------------
```javascript
queueDB.getQueueList();
```
Returns the queue as an ordered list of song objects

Writing the queue
-----------------
~~~js
queueDB.setQueueFromList(queueList);
~~~
Overwrites the queue with the list past in as a parameter. This should be avoided, since the other functions can be used for all the common operations.

Adding a song to the end of the Queue
-------------------------------------
```javascript
queueDB.addSongToQueue(songObject);
```
Adds a song object, the argument is a javascript song object as defined [here](https://github.com/nichochar/musiq-chrome/edit/documentation/docs/localStorageAPI.md#song-stored-in-db-format)

Popping a song from the Queue
-----------------------------
```javascript
queueDB.popNextSongInQueue();
```
Returns the first song if it exists, else returns ```null```

Removing a Song from the Queue
------------------------------
```javascript
queueDB.removeSongFromQueue(index);
```
Removes the song at the index passed as a parameter from the queue
Returns the new queue if it works, returns ```false``` if it fails

Querying for a song in the queue
--------------------------------
This isn't necessary since you can get the list and parse it directly on your client, it still remains possible:
```javascript
queueDB.getSongByIdentifier(identifier, value);
```
Returns the song element if found, returns ```null``` if not found
