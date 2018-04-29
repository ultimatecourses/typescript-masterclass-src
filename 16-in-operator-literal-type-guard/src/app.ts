class Song {
  kind: 'song';
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  kind: 'playlist';
  constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
  return 'title' in item;
}

function getItemName(item: Song | Playlist) {
  // if (isSong(item)) {
  if (item.kind === 'song') {
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
