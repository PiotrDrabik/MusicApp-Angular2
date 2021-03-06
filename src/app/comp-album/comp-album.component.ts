import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FirstLargeLetterPipe } from '../first-large-letter.pipe';


@Component({
    selector: 'app-comp-album',
    providers: [],
    templateUrl: './comp-album.component.html',
    styleUrls: ['../app.common.css']
})
export class CompAlbumComponent implements OnInit {
    loaded: boolean;
    constructor(private searchCom: SearchService) {
    }

    ngOnInit() {
        this.searchCom.settin.type = 'album';
        this.searchCom.checkIt();
    }

}
