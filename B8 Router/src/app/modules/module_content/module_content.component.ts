import { Component, OnInit } from '@angular/core';
import { danh_sach_cart } from '../../../global.js';
import { san_pham } from '../../models/model_san_pham';
import { SanPhamService } from '../../services/san_pham.service';
import { LoginService } from '../../services/login/login.service';


@Component({
    selector: 'module-content',
    templateUrl: '/app/modules/module_content/module_content.component.html',
    providers: [SanPhamService],
})
export class ModContentComponent implements OnInit {
    // shoes_list = [
    //     {    
    //         id: 1,
    //         name: "MAU GIAY 1",
    //         image: "shoe_pic1.jpg",
    //         gia: 300,
    //     },
    //     {    
    //         id: 2,
    //         name: "MAU GIAY 2",
    //         image: "shoe_pic2.jpg",
    //         gia: 400,
    //     },
    //     {    
    //         id: 3,
    //         name: "MAU GIAY 3",
    //         image: "shoe_pic3.jpg",
    //         gia: 500,
    //     },
    //     {    
    //         id: 4,
    //         name: "MAU GIAY 4",
    //         image: "shoe_pic4.jpg",
    //         gia: 300,
    //     },
    //     {    
    //         id: 5,
    //         name: "MAU GIAY 5",
    //         image: "shoe_pic5.jpg",
    //         gia: 400,
    //     },
    //     {    
    //         id: 6,
    //         name: "MAU GIAY 6",
    //         image: "shoe_pic6.jpg",
    //         gia: 500,
    //     }
    // ];
   

    click_mua(dsg:any){
        //console.log(dsg);
        danh_sach_cart.push(dsg);
        console.log(danh_sach_cart);
    }
    
    shoes_list:san_pham[];
    constructor(dssp : SanPhamService, kiemtra : LoginService) {
        //this.shoes_list = dssp.danh_sach_san_pham();
        kiemtra.check_login();
        if(kiemtra.login_validate)
        {
            console.log('Tai du lieu thanh cong')
            dssp.danh_sach_san_pham_promise()
            .then(ds_san_pham => this.shoes_list = ds_san_pham.filter(sp => sp.gia >=400))
        }
        else{
            console.log('Tai du lieu khong thanh cong')
        }
        
     }

    ngOnInit() { }
}