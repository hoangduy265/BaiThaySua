import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'module-menu',
    templateUrl: '/app/widgets/module_menu/module_menu.component.html',
    animations:[
        trigger("hieu_ung_menu",[
            state("an",style({
                height: "0"
            })),
            state("hien",style({
                height: "*"
            })),
            transition("an => hien", animate("300ms ease")),
            transition("hien => an", animate("300ms ease")),
        ])
    ]
})
export class ModMenuComponent implements OnInit {

    danh_sach_menu:any =[
        {
            id:1,
            name:"home",
            link: "/"
        },
        {
            id:2,
            name:"Đăng ký",
            link: "dang-ky"
        },
        {
            id:3,
            name:"shoes",
            state:"an",
            link: "shoes",
            danh_sach_menu_con:[
                {
                    id:4,
                    name:"tall shoes",
                    link: "tall-shoes"
                },
                {
                    id:5,
                    name:"short shoes",
                    link: "short-shoes"
                },
                {
                    id:6,
                    name:"long shoes",
                    link: "long-shoes"
                }
            ]
        }
    ]
    
    trang_thai_menu:string = "an_menu";

    constructor() { }

    ngOnInit() { }

    kiem_tra_trang_thai_menu(id_menu: any){
        // if(this.trang_thai_menu == "an_menu"){
        //     this.trang_thai_menu = "hien_menu"
        // }else{
        //     this.trang_thai_menu = "an_menu"
        // }
        this.danh_sach_menu.forEach(function(menu: any){
            if(menu.id == id_menu)
            {
                if(menu.state == "an")
                {
                    menu.state = "hien";
                }
                else
                {
                    menu.state = "an";
                }
            }
        })
    }
}