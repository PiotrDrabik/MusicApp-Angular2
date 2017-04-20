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
  //router: any;
  pageRouter: string;
  constructor( private searchCom: SearchService, public router: Router ){
    //to check current route
    this.router = router;
  }

  keyId = function(event) {
    //console.log('Key charCode: ' + event.charCode);
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
    //this.router.navigate(['/album']);
    console.log('123');
  }

  ngOnInit() {

  }

}
