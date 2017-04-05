import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-comp-artist',
  providers: [],
  templateUrl: './comp-artist.component.html',
  styleUrls: ['../app.common.css']
})
export class CompArtistComponent implements OnInit {

  constructor( private searchCom: SearchService ){

  }

  ngOnInit() {
  }

}
