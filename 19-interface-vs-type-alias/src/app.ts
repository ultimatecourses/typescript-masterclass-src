interface Item {
  name: string;
}

interface Artist extends Item {
  songs: number;
}

interface Artist {
  getSongs(): number;
}

type Artist2 = { name: string } & Item;

const newArtist: Artist = {
  name: 'ABC',
  songs: 5,
  getSongs() {
    return this.songs;
  }
};