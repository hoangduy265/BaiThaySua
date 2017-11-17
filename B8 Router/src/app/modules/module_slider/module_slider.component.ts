import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
    selector: 'module-slider',
    templateUrl: '/app/modules/module_slider/module_slider.component.html',
    animations:[
        trigger("hieu_ung_slider",[
            state("an",style({
                opacity: "0",
                display: "block"
            })),
            state("hien",style({
                opacity: "1",
                display: "block"
            })),
            transition("an => hien", animate("300ms ease")),
            transition("hien => an", animate("300ms ease")),
        ])
    ]
})
export class ModSliderComponent implements OnInit {
    id_hien_tai: number = 1;

    constructor() { }

    ngOnInit() {
        let bien_con_tro_this = this;
        setInterval(function() {
            bien_con_tro_this.thay_doi_next(); 
        }, 4000)
    }

    danh_sach_slider:any =[
        {
            id:1,
            tieude:"welcome to aditii",
            mota:"When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road.",
            hinh:"slider1.png",
            state: "hien"
        },
        {
            id:2,
            tieude:"Easy management",
            mota:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
            hinh:"slider2.png",
            state: "an"
        },
        {
            id:3,
            tieude:"Revolution",
            mota:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.",
            hinh:"slider3.png",
            state: "an"
        },
        {
            id:4,
            tieude:"Quality Control",
            mota:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
            hinh:"slider4.png",
            state: "an"
        }
    ];


    thay_doi_next()
    {
        this.id_hien_tai += 1;
        if(this.id_hien_tai > this.danh_sach_slider.length)
        {
            this.id_hien_tai = 1;
        }

        var id_ht = this.id_hien_tai;

        this.danh_sach_slider.forEach(function(slide: any){
            if(slide.id == id_ht)
            {
                slide.state = "hien";
            }
            else
            {
                slide.state = "an";
            }
        });
    }

    thay_doi_prev()
    {
        this.id_hien_tai -= 1;
        if(this.id_hien_tai <= 0)
        {
            this.id_hien_tai = this.danh_sach_slider.length;
        }

        var id_ht = this.id_hien_tai;

        this.danh_sach_slider.forEach(function(slide: any){
            if(slide.id == id_ht)
            {
                slide.state = "hien";
            }
            else
            {
                slide.state = "an";
            }
        });
    }
}