import { Component, OnInit } from '@angular/core';
import { user_contact } from '../../models/model_user';

@Component({
    selector: 'module-contact',
    templateUrl: '/app/modules/module_contact/module_contact.component.html'
})
export class ModContactComponent implements OnInit {
    user_contact = new user_contact("Nguyen Van A","aaa@mail.com","","Test abc");
    da_gui_form: boolean = false;

    constructor() { }

    ngOnInit() { }

    GuiForm(){
        this.da_gui_form = true;
        alert('Gui thanh cong');
    }
}