import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  settin = {
    inputData: '',
    next: 'test',
    previous: '',
    total: 0,
    position: null,
    type: 'artist',
    receivedData: [],
    limit: null,
    artist: []
  };

  checkIt = function() {
    console.log('this.settin.inputData');
    console.log(this.settin.inputData);
    if (this.settin.inputData!='') {
      //this.search(`https://api.spotify.com/v1/search?q=${this.inpData}&type=album artist`);
      this.searchSpotify(`https://api.spotify.com/v1/search?q=${this.settin.inputData}&type=${this.settin.type}`, null);
    } else {
      this.receivedData = []
    }
  }

  takeAlbums = function(id) {
    console.log(id);
    this.searchHttp(`https://api.spotify.com/v1/artists/${id}/albums`)
    .subscribe((response:Response)=>{
      let data = response.json()
      console.log(data);
          this.saveVariables(data, "");
          /*this.settin.next = data.next;
          this.settin.previous = data.previous;
          this.settin.total = data.total;
          this.settin.position = data.offset+1;
          this.settin.limit = data.items.length;
          this.settin.receivedData = data.items.map(v => {
            return v;
          });*/
    });
    //this.searchAlbums(id);
  };

  takeTracks = function(id, index) {
    console.log('takeTracks');
    console.log(id);
    this.settin.artist.index = this.settin.receivedData[index].index;
    this.settin.artist.id = this.settin.receivedData[index].id;
    this.settin.artist.img = this.settin.receivedData[index].images[0].url;
    this.settin.artist.name = this.settin.receivedData[index].name;
    this.settin.artist.artists = this.settin.receivedData[index].artists;
    console.log(this.settin.artist.href);
    console.log(this.settin.artist.img);
    console.log(this.settin.artist.artists);
    this.searchHttp(`https://api.spotify.com/v1/albums/${id}/tracks`)
    .subscribe((response:Response)=>{
      let data = response.json()
      console.log(data);
      this.saveVariables(data, "");
    });
  };

  searchHttp(url) {
    return this.http.get(url);
  }

  saveVariables(data, key) {
          this.settin.next = eval(`data${key}.next`); 
          this.settin.previous = eval(`data${key}.previous`); 
          this.settin.total = eval(`data${key}.total`); 
          this.settin.position = eval(`data${key}.offset+1`); 
          this.settin.limit = eval(`data${key}.items.length`); 
          this.settin.receivedData = eval(`data${key}.items.map(v => { return v; })`);
  }

  searchSpotify(url) {
    this.searchHttp(url)
    .subscribe((response:Response)=>{
      let data = response.json()
      console.log(data);
      if (this.settin.type == 'artist') {
          this.saveVariables(data, ".artists");
        /*let abc = eval(`data.artists.next`);
        let bcd = "artists";
          abc = eval(`data.${bcd}.next`);
          console.log(abc);
          this.settin.next = abc;
          this.settin.previous = data.artists.previous;
          this.settin.total = data.artists.total;
          this.settin.position = data.artists.offset+1;
          this.settin.limit = data.artists.items.length;
          this.settin.receivedData = data.artists.items.map(v => {
            return v;
          });*/
      } else if (this.settin.type == 'album') {
          this.saveVariables(data, ".albums");
          /*this.settin.next = data.albums.next;
          this.settin.previous = data.albums.previous;
          this.settin.total = data.albums.total;
          this.settin.position = data.albums.offset+1;
          this.settin.limit = data.albums.items.length;
          this.settin.receivedData = data.albums.items.map(v => {
            return v;
          });*/
      } else {
          this.saveVariables(data, "");
          /*this.settin.next = data.next;
          this.settin.previous = data.previous;
          this.settin.total = data.total;
          this.settin.position = data.offset+1;
          this.settin.limit = data.items.length;
          this.settin.receivedData = data.items.map(v => {
            return v;
          });*/
      }
      console.log('-------');
      console.log(this.settin.next);
      console.log(this.settin.inputData);
      console.log(this.settin.previous);
      console.log(this.settin.total);
      console.log(this.settin.limit);
      console.log(this.settin.receivedData);
    
    })
  };

}