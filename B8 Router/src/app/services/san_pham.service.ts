import { Injectable } from '@angular/core';
import { mock_san_pham } from '../models/mock_san_pham';
import { san_pham } from '../models/model_san_pham';

@Injectable()
export class SanPhamService {

    constructor() { }

    danh_sach_san_pham(){
        return mock_san_pham;
    }

    danh_sach_san_pham_promise():Promise<san_pham[]>{
        return Promise.resolve(mock_san_pham);
    }

    thong_tin_san_pham(id: any):Promise<san_pham>
    {
        let san_pham_r: san_pham;
        mock_san_pham.forEach(function(san_pham){
            if(san_pham.id == id)
            {
                san_pham_r = san_pham;
            }
        });

        return Promise.resolve(san_pham_r);
    }
}