import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-favorite-button',
    templateUrl: './favorite-button.component.html',
    styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {

    @Input()
    actionName: string;

    constructor(private authApp: AuthService, private searchCom: SearchService) { }

    ngOnInit() {
    }

}
