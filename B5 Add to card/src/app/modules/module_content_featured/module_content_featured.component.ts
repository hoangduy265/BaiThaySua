import { Component, OnInit } from '@angular/core';

import {gio_hang} from '../../../global.js';

@Component({
    selector: 'content_featured',
    templateUrl: '/app/modules/module_content_featured/module_content_featured.component.html'
})
export class ModContentFeatured implements OnInit {
    ds_usb:any = [
        {
            id : 1,
            ten : 'USB 8GB kington',
            hinh: 'usb_kington.jpg',
            gia: 65000
        },
        {
            id :2,
            ten : 'USB 8GB seagate',
            hinh: 'usb_seagate.jpg',
            gia: 76000
        },
        {
            id : 3,
            ten : 'USB 8GB transcent',
            hinh: 'usb_transcent.jpg',
            gia: 80000
        },
        {
            id : 4,
            ten : 'USB 8GB apacer',
            hinh: 'usb_apacer.jpg',
            gia: 100000
        },
        {
            id : 5,
            ten : 'USB 8GB HP',
            hinh: 'usb_apacer.jpg',
            gia: 100000
        },
        {
            id : 6,
            ten : 'USB 8GB DELL',
            hinh: 'usb_apacer.jpg',
            gia: 100000
        }


    ];

    constructor() { }

    ngOnInit() { }

    them_vao_gio_hang(san_pham: any){
        //console.log(san_pham);
        var tong_so_luong = 0;
        var kiem_tra = 0;
        gio_hang.forEach(function(san_pham_gio_hang){
            if(san_pham_gio_hang.id == san_pham.id)
            {
                san_pham_gio_hang.so_luong += 1;
                kiem_tra = 1;
                tong_so_luong += san_pham_gio_hang.so_luong;
            }
        })
        
        if(kiem_tra == 0)
        {
            san_pham.so_luong = 1;
            gio_hang.push(san_pham);
        }

        //so_luong_gio_hang = tong_so_luong;
        console.log(gio_hang);
    }

}