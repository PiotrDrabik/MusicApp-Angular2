import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { SearchService } from '../search.service';
//import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-http-rxjs',
  providers: [],
  templateUrl: './http-rxjs.component.html',
  styleUrls: ['../app.common.css']
})
export class HttpRxjsComponent implements OnInit {

  constructor( private searchCom: SearchService ){

  }
  checkIt = function() {
    console.log('this.searchCom.settin.inputData');
    console.log(this.searchCom.settin.inputData);
    if (this.searchCom.settin.inputData!='') {
      //this.search(`https://api.spotify.com/v1/search?q=${this.inpData}&type=album artist`);
      this.searchCom.searchSpotify(`https://api.spotify.com/v1/search?q=${this.searchCom.settin.inputData}&type=${this.searchCom.settin.type}`, null);
    } else {
      this.searchCom.receivedData = []
    }
  }
  keyId = function(event) {
    console.log('Key charCode: ' + event.charCode);
    //console.log(event);
  }
  nextPrev = function(direction) {
    let url = (direction=="next") ? this.searchCom.settin.next :  this.searchCom.settin.previous;
    this.searchCom.searchSpotify(url);
  }
/*
  takeAlbums = function(id) {
    console.log(id);
    this.searchCom.searchSpotify(id);
    //this.searchAlbums(id);
  };

  searchAlbums = function(id) {
    let url = `https://api.spotify.com/v1/artists/${id}/albums`;
    this.http.get(url)
    .subscribe((response:Response)=>{
      let data = response.json()
      console.log(data);
      this.albums = data.items.map(v => {
          return v;
      })
      console.log(this.albums);
    })
  };*/

  ngOnInit() {

  }

}
