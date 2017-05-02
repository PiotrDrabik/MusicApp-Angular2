import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['../app.common.css']
})
export class GenresComponent implements OnInit {

    @Input()
    item2 = [];

    @Input()
    label = '';

    clicked = false;

    constructor() { }

    ngOnInit() {
    }
}
