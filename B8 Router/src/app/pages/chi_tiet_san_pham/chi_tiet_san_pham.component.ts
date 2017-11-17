import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { SanPhamService } from '../../services/san_pham.service';
import { san_pham } from '../../models/model_san_pham';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'chi-tiet-san-pham',
    templateUrl: './app/pages/chi_tiet_san_pham/chi_tiet_san_pham.component.html'
})
export class ChiTietSanPhamComponent implements OnInit {
    thong_tin_chi_tiet_san_pham: san_pham;

    constructor(private route: ActivatedRoute, private router: Router, private service_san_pham: SanPhamService) { 
        //let id_san_pham:any;
        //console.log(this.route.params["id_san_pham"]);
        

        // id_san_pham = this.route.snapshot.params["id_san_pham"];
        // console.log(id_san_pham);
        // this.service_san_pham.danh_sach_san_pham_promise()
        //     .then(ds_san_pham => {this.thong_tin_chi_tiet_san_pham = ds_san_pham.filter(sp => sp.id == id_san_pham);console.log(this.thong_tin_chi_tiet_san_pham);})

        //console.log(this.thong_tin_chi_tiet_san_pham);

        // let id = this.route.snapshot.params['id_san_pham'];

        // this.service_san_pham.thong_tin_san_pham(id)
        //     .then((tt_san_pham: san_pham) => this.thong_tin_chi_tiet_san_pham = tt_san_pham);
    }

    ngOnInit(): void { 
        this.route.params.switchMap((param: Params) => this.service_san_pham.thong_tin_san_pham(param["id_san_pham"]))
        .subscribe(san_pham => 
            {
                console.log(san_pham);
                this.thong_tin_chi_tiet_san_pham = san_pham; 
                //console.log(this.thong_tin_chi_tiet_san_pham)
            });
    }
}