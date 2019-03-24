const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
  {
      songId: 5,
      title: 'Heart of Gold',
      artist: 'Johnny Cash',
  },
  {
    songId: 6,
    title: 'Heart of Gold',
    artist: 'Neil Young',
  }
];
//Add song to database
function addSongToDatabase(song) {
    songDatabase.push(song);
}
addSongToDatabase({songId: 5, title: 'Bohemian Raphsody', artist: 'Queen'});
console.log(songDatabase);

//Searching for a song
function getSongByTitle(title) {
    let arrayOfSongs = [];
    for (let i = 0; i < songDatabase.length; i++) {
        if (songDatabase[i].title === title) {
            arrayOfSongs.push(songDatabase[i]);
        }
    }
    return arrayOfSongs;
}
const searchedSong = getSongByTitle('Heart of Gold');
console.log(searchedSong);
const searchedSong2 = getSongByTitle('Heart with Gold');
console.log(searchedSong2);
const searchedSong3 = getSongByTitle('Heart made of Gold');
console.log(searchedSong3);

//Create our own playlist
const myPlaylist = [];
function addSongToMyPlaylist(title) {
    myPlaylist.push(title);
}
addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist);
