import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRxjsComponent } from './http-rxjs/http-rxjs.component';
import { RouterModule, Router } from '@angular/router';

@Injectable()
export class SearchService {

    public errorMessage: string;
    public settin = {
        inputData: '',
        next: 'test',
        previous: '',
        total: 0,
        position: null,
        type: 'artist',
        receivedData: [],
        limit: null,
        artist: {
            index: 0,
            id: '',
            albums: ''
        }
    };
    public user = {
        email: '',
        password: '',
        name: ''
    };
    constructor(private http: Http, public router: Router) {}

    checkIt = function () {
        if (this.router.url === '/tracks-list') {
            this.router.navigate([`/${this.settin.type}`]);
        }
        if (this.settin.inputData !== '') {
            this.searchSpotify(`https://api.spotify.com/v1/search?q=${this.settin.inputData}&type=${this.settin.type}`, null);
            this.router.navigate([this.settin.type]);
        } else {
            this.receivedData = [];
            this.router.navigate([`/`]);
        }
    };

    takeAlbums = function (id, nextPrev:string) {
        this.settin.artist.albums = id;
        let url = '';
        url = (nextPrev === null) ? `https://api.spotify.com/v1/artists/${id}/albums` : nextPrev;
        this.searchHttp(url)
            .subscribe((response: Response) => {
                let data = response.json();
                this.saveVariables(data, '');
            });
    };

    takeTracks = function (id, index) {
        this.settin.artist.index = this.settin.receivedData[index].index;
        this.settin.artist.id = this.settin.receivedData[index].id;
        this.settin.artist.img = this.settin.receivedData[index].images[0].url;
        this.settin.artist.name = this.settin.receivedData[index].name;
        this.settin.artist.artists = this.settin.receivedData[index].artists;
        console.log(this.settin.artist);
        this.searchHttp(`https://api.spotify.com/v1/albums/${id}/tracks`)
            .subscribe((response: Response) => {
                let data = response.json();
                this.saveVariables(data, '');
                this.settin.previous = null;
                this.settin.next = null;
                console.log(data);
            });
    };

    searchHttp(url) {
        return this.http.get(url);
    }

    saveVariables(data, key) {
        this.settin.next = eval(`data${key}.next`);
        this.settin.previous = eval(`data${key}.previous`);
        this.settin.total = eval(`data${key}.total`);
        this.settin.position = eval(`data${key}.offset+1`);
        this.settin.limit = eval(`data${key}.items.length`);
        this.settin.receivedData = eval(`data${key}.items.map(v => { return v; })`);
    }

    searchSpotify(url) {
        this.searchHttp(url)
            .subscribe((response: Response) => {
                let data = response.json();
                if (this.settin.type === 'artist') {
                    this.saveVariables(data, '.artists');
                } else if (this.settin.type === 'album') {
                    this.saveVariables(data, '.albums');
                } else {
                    this.saveVariables(data, '');
                }

            })
    };

}