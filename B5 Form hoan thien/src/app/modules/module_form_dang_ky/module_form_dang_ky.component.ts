import { Component, OnInit } from '@angular/core';

import { nguoi_dung } from '../../models/model_nguoi_dung';

@Component({
    selector: 'module_form_dang_ky',
    templateUrl: './app/modules/module_form_dang_ky/module_form_dang_ky.component.html'
})
export class ModFormDangKyComponent implements OnInit {
    nguoi_dung = new nguoi_dung(0,"Test thử","","","","","");
    da_gui_form: boolean = false;

    constructor() { 
        
    }

    ngOnInit() { 
        
    }

    GuiForm(){
        this.da_gui_form = true;
    }
}