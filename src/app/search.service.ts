import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

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
    limit: null
  };

  takeAlbums = function(id) {
    console.log(id);
    this.searchHttp(`https://api.spotify.com/v1/artists/${id}/albums`)
    .subscribe((response:Response)=>{
      let data = response.json()
      console.log(data);
          this.settin.next = data.next;
          this.settin.previous = data.previous;
          this.settin.total = data.total;
          this.settin.position = data.offset+1;
          this.settin.limit = data.items.length;
          this.settin.receivedData = data.items.map(v => {
            return v;
          });
    });
    //this.searchAlbums(id);
  };

  searchHttp(url) {
    return this.http.get(url);
  }

  searchSpotify(url) {
    this.searchHttp(url)
    .subscribe((response:Response)=>{
      let data = response.json()
      console.log(data);
      if (this.settin.type == 'artist') {
          this.settin.next = data.artists.next;
          this.settin.previous = data.artists.previous;
          this.settin.total = data.artists.total;
          this.settin.position = data.artists.offset+1;
          this.settin.limit = data.artists.items.length;
          this.settin.receivedData = data.artists.items.map(v => {
            return v;
          });
      } else {
          this.settin.next = data.albums.next;
          this.settin.previous = data.albums.previous;
          this.settin.total = data.albums.total;
          this.settin.position = data.albums.offset+1;
          this.settin.limit = data.albums.items.length;
          this.settin.receivedData = data.albums.items.map(v => {
            return v;
          });
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