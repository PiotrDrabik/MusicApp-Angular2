import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Http, Response } from '@angular/http';
import { HttpRxjsComponent } from './http-rxjs/http-rxjs.component';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class BackendService {
    chatMessages: FirebaseListObservable<any>;
    userList: FirebaseListObservable<any>;
    newList = [];
    // all albums' ID and UID in one array
    albumList = [];
    // all received albums' data (index identical like above)
    albumApiList;
    // all tracks' ID and UID in one array
    trackList = [];
    // all received tracks' data (index identical like above)
    trackApiList;
    constructor(public af: AngularFire, private router: Router, public authApp: AuthService, public http: Http) {

        this.chatMessages = af.database.list('/messages', {
            query: {
                limitToLast: 3
                // orderByChild: 'date'
            }
        });
        this.userList = af.database.list(this.authApp.checkUserUid(), {});
        af.database.list(this.authApp.checkUserUid(), {})
          .flatMap(list => list)
          .subscribe(value => {
                this.newList.push(value);
            });
    }

    check = function() {
        let albumListStr = '';
        let trackListStr = '';
        for (let i = 0; i < this.newList.length; i++) {
                    if (this.newList[i].album) {
                        this.albumList.push(this.newList[i]);
                        albumListStr += this.newList[i].album + ',';
                    } else {
                        this.trackList.push(this.newList[i]);
                        trackListStr += this.newList[i].track + ',';
                    }
                }
                for (let i = 0; i < this.albumList.length; i++) {

                }
        albumListStr = albumListStr.substring(0, albumListStr.length - 1);
        trackListStr = trackListStr.substring(0, trackListStr.length - 1);
        this.getFavorite(`https://api.spotify.com/v1/albums?ids=${albumListStr}`);
        //this.trackApiList = this.searchCom.getFavorite(`https://api.spotify.com/v1/tracks?ids=${trackListStr}`);
    };

    searchHttp(url) {
        return this.http.get(url);
    }

    getFavorite = function(url: string) {
        console.log('getFavorite: url');
        console.log(url);
        this.searchHttp(url)
            .subscribe((response: Response) => {
                let data = response.json();
                console.log('getFavorite: received data');
                this.albumApiList = data;
            });
    };

    deleteFromDB = function (selectedKey) {
        console.log(selectedKey);
        this.userList.remove(selectedKey);
    };

    addToDB = function (newId, isAlbum) {
        console.log(newId);
        let from: string = (isAlbum == true) ? 'album' : 'track';
        console.log(`It is the ID of clicked: ${from}`);
        let obj;
        if (isAlbum) {
            obj = {
                album: newId
            };
        } else {
            obj = {
                track: newId
            };
        }
        this.userList.push(obj);
    };

}
