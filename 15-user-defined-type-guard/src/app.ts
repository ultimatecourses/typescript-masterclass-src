class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return item instanceof Song;
}

function getItemName(item: Song | Playlist) {
  if (isSong(item)) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName);

const playlistName = getItemName(
  new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playlistName);
