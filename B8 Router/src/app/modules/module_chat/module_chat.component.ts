import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
declare var $:any;

@Component({
    selector: 'module-chat',
    templateUrl: './app/modules/module_chat/module_chat.component.html',
    animations:[
        trigger("hieu_ung_an_hien",[
            state("an",style({
                bottom: "-250px"
            })),
            state("hien",style({
                bottom: "0px"
            })),
            transition("an => hien", animate("500ms ease")),
            transition("hien => an", animate("500ms ease")),
        ])
    ]
})
export class ModChatComponent implements OnInit {

    mang_chat:any[] = [];

    trang_thai_khung_chat:string = "an";

    constructor() { }

    ngOnInit() { }

    // chatday(event:any){
    //     if(event.keyCode == 13){
    //          this.mang_chat.push(event.target.value);
    //          event.target.value = "";
    //          setTimeout(function(){
    //              $('.noihienchat').scrollTop($('.khunghienchat').height);
    //         }, 10)
    //     }
    // }

    chat_enter(event:any){
        if(event.target.value == "" || event.target.value == null)
        {
            alert("Bạn không muốn chat sao?");
        }
        else{
            this.mang_chat.push({noidung: event.target.value, nguoigui: 1});
            this.mang_chat.push({noidung: 'tra loi ' + event.target.value, nguoigui: 0});
            event.target.value = "";
            setTimeout(function(){
                $(".noihienchat").scrollTop($(".khunghienchat").height());
            }, 10);
        }
    }

    chat_click(event:any){
         if(event.value == "" || event.value == null)
        {
            alert("Bạn không muốn chat sao?");
        }
        else{
            this.mang_chat.push({noidung: event.value, nguoigui: 1});
            this.mang_chat.push({noidung: 'tra loi ' + event.value, nguoigui: 0});
            event.value = "";
            setTimeout(function(){
                $(".noihienchat").scrollTop($(".khunghienchat").height());
            }, 10);
        }
    }
    kiem_tra_trang_thai_khung_chat(){
        if(this.trang_thai_khung_chat == "an"){
            this.trang_thai_khung_chat = "hien"
        }else{
            this.trang_thai_khung_chat = "an"
        }
    }

}