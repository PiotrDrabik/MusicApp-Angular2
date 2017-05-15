import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth.service';
import { SearchService } from '../search.service';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, AfterViewInit {
    static hammerInitialized = false;
    element = {
        innerHeight: null,
        innerWidth: null,
        left: 0,
        right: 0
    }
    constructor(public af: AngularFire, private router: Router, public searchCom: SearchService, public authApp: AuthService, public db: BackendService) {}

    deleteFromDB = function(selectedKey) {
        console.log(selectedKey);
        this.db.userList.remove(selectedKey);
    };

    moveCarousel(direction) {
        if (direction === 'left') {
            this.moveLeft();
        }
        if (direction === 'right') {
            this.moveRight();
        }
    }

    moveLeft(): string {

        let listWidth = (this.db.albumApiList.albums.length - 1 ) * 400;
        if (this.db.albumApiList.albums.length) {
            if (this.element.left <= -1 * listWidth) {
                return this.element.left + 'px';
            }
        }
        this.element.left -= 400;
        return this.element.left + 'px';
    }
    moveRight(): string {
        if (this.element.left>=0) {
            this.element.left = 5;
            } else {
                this.element.left += 400;
        }
        return this.element.left + 'px';
    }

    ngOnInit() {
        this.element.innerHeight = (window.innerHeight) + 'px';
        this.element.innerWidth = (window.innerWidth);
    }

    ngAfterViewInit() {
        const interval = setInterval(() => {
                            if (this.db.newList.length > 0) {
                                this.db.check();
                                clearInterval(interval);
                            }
                        }, 500);
    }
}
