import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    login_validate:Boolean = false;
    constructor() { }
    check_login(){
        this.login_validate = true;
    }
}