import { Component, OnInit } from '@angular/core';
import { danh_sach_cart } from '../../../global.js';

@Component({
    selector: 'module-header',
    templateUrl: '/app/widgets/module_header/module_header.component.html'
})
export class ModHeaderComponent implements OnInit {
    //tien: number = 0;
    ds_gio_hang:any;
    constructor() {
        this.ds_gio_hang = danh_sach_cart;
     }

    ngOnInit() { }

    xu_ly_click(){
        //this.tien += 10;
    }
}