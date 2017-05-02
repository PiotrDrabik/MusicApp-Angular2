import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
    chatMessages: FirebaseListObservable<any>;
    userList: FirebaseListObservable<any>;
    constructor(public af: AngularFire, private router: Router, public authApp: AuthService) {

        this.chatMessages = af.database.list('/messages', {
            query: {
                limitToLast: 3
            // orderByChild: 'date'
            }
        });
        this.userList = af.database.list(this.authApp.checkUserUid() , {});
        //this.userList.push({songs: ['One', 'Sunday Bloody Sunday'], album: ['Black', 'Best Of Deep House'], uid: ['123']});
    }

    deleteFromDB = function(selectedKey) {
        console.log(selectedKey);
        this.userList.remove(selectedKey);
    };

    ngOnInit() {
    }
}
