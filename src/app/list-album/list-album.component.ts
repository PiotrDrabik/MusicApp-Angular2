import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['../app.common.css']
})
export class ListAlbumComponent implements OnInit {

  constructor( private searchCom: SearchService ){

  }

  ngOnInit() {
  }

}
