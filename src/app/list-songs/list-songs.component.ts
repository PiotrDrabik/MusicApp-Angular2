import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['../app.common.css']
})
export class ListSongsComponent implements OnInit {

  constructor( private searchCom: SearchService ){  }

  ngOnInit() {
  }

}
