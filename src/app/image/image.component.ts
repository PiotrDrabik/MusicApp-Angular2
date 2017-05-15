import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
    loaded: boolean;

    @Input()
    images: string[];

    constructor() { }

    ngOnInit() {
        this.loaded = false;
    }

    imgLoaded() {
        this.loaded = true;
    }
}
