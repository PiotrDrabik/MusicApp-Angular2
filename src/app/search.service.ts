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
    artist: {index:0,id:'',albums:''}
  };

  checkIt = function() {
    if (this.settin.inputData!='') {
      //this.search(`https://api.spotify.com/v1/search?q=${this.inpData}&type=album artist`);
      this.searchSpotify(`https://api.spotify.com/v1/search?q=${this.settin.inputData}&type=${this.settin.type}`, null);
    } else {
      this.receivedData = []
    }
  }

  takeAlbums = function(id) {
    this.settin.artist.albums = id;
    this.searchHttp(`https://api.spotify.com/v1/artists/${id}/albums`)
    .subscribe((response:Response)=>{
      let data = response.json()
          this.saveVariables(data, "");
    });
  };

  takeTracks = function(id, index) {
    this.settin.artist.index = this.settin.receivedData[index].index;
    this.settin.artist.id = this.settin.receivedData[index].id;
    this.settin.artist.img = this.settin.receivedData[index].images[0].url;
    this.settin.artist.name = this.settin.receivedData[index].name;
    this.settin.artist.artists = this.settin.receivedData[index].artists;
    this.searchHttp(`https://api.spotify.com/v1/albums/${id}/tracks`)
    .subscribe((response:Response)=>{
      let data = response.json()
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
      if (this.settin.type == 'artist') {
          this.saveVariables(data, ".artists");
      } else if (this.settin.type == 'album') {
          this.saveVariables(data, ".albums");
      } else {
          this.saveVariables(data, "");
      }
    
    })
  };

}