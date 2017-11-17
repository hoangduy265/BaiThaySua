import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'module-dsgiay',
    templateUrl: '/app/modules/module_dsgiay/module_dsgiay.component.html'
})
export class ModDSGiayComponent implements OnInit {
    shoes_list = [
        {    
            id: 1,
            name: "MAU GIAY 1",
            image: "shoe_pic1.jpg",
            gia: 300,
        },
        {    
            id: 2,
            name: "MAU GIAY 2",
            image: "shoe_pic2.jpg",
            gia: 400,
        },
        {    
            id: 3,
            name: "MAU GIAY 3",
            image: "shoe_pic3.jpg",
            gia: 500,
        },
        {    
            id: 4,
            name: "MAU GIAY 4",
            image: "shoe_pic4.jpg",
            gia: 300,
        },
        {    
            id: 5,
            name: "MAU GIAY 5",
            image: "shoe_pic5.jpg",
            gia: 400,
        },
        {    
            id: 6,
            name: "MAU GIAY 6",
            image: "shoe_pic6.jpg",
            gia: 500,
        }
    ];

    constructor() { }

    ngOnInit() { }
}