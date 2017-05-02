import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-list-album',
    templateUrl: './list-album.component.html',
    styleUrls: ['../app.common.css']
})
export class ListAlbumComponent implements OnInit {

    constructor(private searchCom: SearchService, public router: Router) {

    }

    ngOnInit() {
        this.searchCom.takeAlbums(this.searchCom.settin.artist.albums, null);
    }
    loadSongsData = function (items, index) {
        this.searchCom.takeTracks(items, index)
        this.router.navigate(['/tracks-list']);
    }
}
