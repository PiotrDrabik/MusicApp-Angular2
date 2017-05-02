import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { AuthService } from '../auth.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inputform',
    templateUrl: './inputform.component.html',
    styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {
    constructor(public searchCom: SearchService, public af: AngularFire, private router: Router, private authApp: AuthService) { }

    ngOnInit() {
    }

    showErrorMessage = function(message: string): void {
        this.searchCom.errorMessage = message;
    }

    onSubmit = function (newUser) {
        if (newUser.valid) {
            this.af.auth.createUser({
                email: newUser.value.email,
                password: newUser.value.password
             }).then((user) => {
            user.auth.updateProfile({
                displayName: newUser.value.name
            });
            this.authApp.checkLoginName(newUser.value.name);
        }).then(
                (success) => {
                    this.router.navigate(['/member']);
            }).catch(
                (err) => {
                this.showErrorMessage(err);
            });
        } else {
            this.showErrorMessage('There are some errors in this form.');
        }
    }
}
