import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { SearchService } from '../search.service';
import { RouterModule, Router } from '@angular/router';
//import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-http-rxjs',
  providers: [],
  templateUrl: './http-rxjs.component.html',
  styleUrls: ['../app.common.css']
})
export class HttpRxjsComponent implements OnInit {
  router: any;
  pageRouter: string;
  constructor( private searchCom: SearchService, public _router: Router ){
    //to check current route
    this.router = _router;
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
  navigate = function() {
    this.searchCom.settin.type='album';
    this.checkIt();
    this.router.navigate(['/album']);
  }
  nextPrev = function(direction) {
    console.log(this.router.url);
    if (this.router.url=="/album-list") {
      this.searchCom.settin.type = 'album-list';
    } 
      let url = (direction=="next") ? this.searchCom.settin.next :  this.searchCom.settin.previous;
      this.searchCom.searchSpotify(url);
    
  }
  changeRoute = function() {
    /*this.parentRouter = Router;
    this.parentRouter.navigateByUrl('/album');
    this.router.parent.navigate(['/album']); */
    this._router.navigate(['/album']);
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
