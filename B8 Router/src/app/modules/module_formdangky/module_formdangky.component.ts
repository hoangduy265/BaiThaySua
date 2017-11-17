import { Component, OnInit } from '@angular/core';
import { user } from '../../models/model_user';

@Component({
    selector: 'module-formdangky',
    templateUrl: './app/modules/module_formdangky/module_formdangky.component.html'
})
export class ModFormdangkyComponent implements OnInit {
    user = new user(0,"Nguyễn Văn A","abc@mai.com","1/1/1990","tkcuatoi","","TPHCM");
    da_gui_form: boolean = false;

    constructor() { }

    ngOnInit() { }

    GuiForm(){
        this.da_gui_form = true;
    }

}