import { Component, OnInit } from '@angular/core';
import { gio_hang} from '../../../../global.js';

@Component({
    selector: 'header_topmenu',
    templateUrl: '/app/widgets/module_header/module_header_topmenu/module_header_topmenu.component.html'
})
export class ModHeaderTopMenu implements OnInit {
    money:number = 0;
    so_luong: any;
    ds_gio_hang: any;
    constructor() { 
        this.ds_gio_hang = gio_hang;
        //this.so_luong = so_luong_gio_hang.so_luong;
    }

    ngOnInit() { }
    cart_money(){
        this.money += 20;
    }
}