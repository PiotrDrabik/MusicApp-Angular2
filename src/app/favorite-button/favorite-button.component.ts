import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';
import { BackendService } from '../backend.service';

@Component({
    selector: 'app-favorite-button',
    templateUrl: './favorite-button.component.html',
    styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {

    @Input()
    actionName: string;

    @Input()
    id: string;

    @Input()
    isAlbum: boolean;

    constructor(private authApp: AuthService, private searchCom: SearchService, public db: BackendService) { }

    ngOnInit() {
    }

}
