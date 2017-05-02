import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchService } from '../search.service';
import { AuthService } from '../auth.service';
import { RouterModule, Router } from '@angular/router';
// import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'app-http-rxjs',
    providers: [],
    templateUrl: './http-rxjs.component.html',
    styleUrls: ['../app.common.css']
})
export class HttpRxjsComponent implements OnInit {
    pageRouter: string;
    constructor(private searchCom: SearchService, public router: Router, private authApp: AuthService) {
        // to check current route
        this.router = router;
    }

    navigate = function () {
        this.searchCom.settin.type = 'album';
        this.checkIt();
        this.router.navigate(['/album']);
    };

    nextPrev = function (direction) {
        let url = (direction === 'next') ? this.searchCom.settin.next : this.searchCom.settin.previous;
        if (this.router.url === '/album-list') {
            this.searchCom.settin.type = 'album';
            this.searchCom.takeAlbums('', url);
        } else {
            this.searchCom.searchSpotify(url);
        }
    };

    clearPasswordForm() {
       this.searchCom.errorMessage = '';
       this.searchCom.user.password = '';
    }

    loginAction = function (action: string) {
        switch(action) {
            case 'login':
                this.clearPasswordForm();
                this.router.navigate(['/login']);
                break;
            case 'logout':
                this.clearPasswordForm();
                this.authApp.logout();
                break;
            case 'newAccount':
                this.clearPasswordForm();
                this.router.navigate(['/new-account']);
                break;
        }
    };

    newAccount = function () {
        this.router.navigate(['/album']);
    }

    emailLogin = function () {
        this.router.navigate(['/album']);
    }

    ngOnInit() { }

}
