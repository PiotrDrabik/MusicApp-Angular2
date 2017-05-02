import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-welcomepage',
    templateUrl: './welcomepage.component.html',
    styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

    constructor(private searchCom: SearchService) { }

    ngOnInit() {
        this.searchCom.settin.inputData = '';
    }

}
