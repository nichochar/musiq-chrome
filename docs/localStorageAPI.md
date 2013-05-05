Queue DB manipulation API
========================

The database.js class implements a variable called `queueDB`, which can be
called to perform operations on the queue.
This document lists the API functionalities

Song stored in DB format
-----------------------
Example of a song, with the information we will find in the DB
~~~json
  {"id": 432,
   "artist":"The Doors",
   "title":"Riders on the Storm",
   "url":"http://www.youtube.com/watch?v=i_eQGsbHhDo",
   "streamUrl":"http://www.fake.com/stream-riders-doors"
   "artworkUrl":"http://www.progarchives.com/progressive_rock_discography_covers/2772/cover_15485992009.jpg",
   "provider":"youtube",
   "providerSongId":"v=i_eQGsbHhDo",
   "duration":440400
  }
~~~

Queue format
------------
*The queue is an ordered javascript array. 
*The objects are the songs.
*The most recent song is at the end, the next song to be played at the
beginning.
Here is an example of a queue with 3 songs:
Getting the queue
-----------------
~~~shell
queueDB.getQueueList()
~~~
Gets the queue 
