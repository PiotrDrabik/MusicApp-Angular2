import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/angularfire2';
import { Injectable, Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService implements CanActivate {

    public loginValue = 'Login';
    private userUid: string;
    constructor(private auth: AngularFireAuth, private router: Router, public af: AngularFire, public searchCom: SearchService) {
        this.af.auth.subscribe(auth => {
            if (auth) {
                const newUser = (auth.auth.displayName) ? auth.auth.displayName : auth.auth.email;
                this.userUid = auth.uid;
                this.loginValue = newUser;
            }
        });
    }

    canActivate(): Observable<boolean> {
        return Observable.from(this.auth)
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/']);
                }
            });
    }

    checkLoginName(newUser: string): void {
        if (this.loginValue !== newUser) {
            this.loginValue = newUser;
        }
    }

    isLogged(): boolean {
        return (this.userUid) ? true : false;
    }

    checkUserUid(): string {
        return this.userUid;
    }

    loginFb() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        }).then(
            (success) => {
                this.router.navigate(['/member']);
                console.log('Successfully Logged in');
            }).catch(
            (err) => {
                console.log('error' + err);
                this.router.navigate(['/login']);
                this.searchCom.errorMessage = err.message;
            });
    }

    loginGoogle() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        }).then(
            (success) => {
                this.router.navigate(['/member']);
                console.log('Successfully Logged in');
            }).catch(
            (err) => {
                console.log('error' + err);
                this.router.navigate(['/login']);
                this.searchCom.errorMessage = err.message;
            });
    }

    logout() {
        console.log('log out');
        this.loginValue = 'Login';
        this.userUid = '';
        this.af.auth.logout();
        this.router.navigate(['/']);
    }

}
