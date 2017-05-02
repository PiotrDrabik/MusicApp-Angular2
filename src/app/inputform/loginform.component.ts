import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Control, ControlGroup} from '@angular/common';

@Component({
    selector: 'app-loginform',
    templateUrl: './loginform.component.html',
    styleUrls: ['./inputform.component.scss']
})
export class LoginformComponent implements OnInit {
    private auth;
    constructor(public searchCom: SearchService, public af: AngularFire, private router: Router) { }

    ngOnInit() {
    }

    showErrorMessage = function(message: string): void {
        this.searchCom.errorMessage = message;
    }

    onSubmit = function (loginData) {
        if (loginData.valid) {
            this.af.auth.login({
                    email: loginData.value.email,
                    password: loginData.value.password
                },
                {
                    provider: AuthProviders.Password,
                    method: AuthMethods.Password,
                }).then(
                    (success) => {
                    this.router.navigate(['/member']);
                }).catch(
                    (err) => {
                    this.showErrorMessage(err.message);
                });
        } else {
            this.showErrorMessage('There are some errors in this form.');
        }
    };
}
