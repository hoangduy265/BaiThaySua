import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    selector: 'home-page',
    templateUrl: './app/pages/home_page/home_page.component.html'
})
export class ModHomePageComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        setTimeout(function(){
            $(document).ready(function() {
                $("#owl-demo").owlCarousel({
                    items : 4,
                    lazyLoad : true,
                    autoPlay : true,
                    navigation : true,
                    navigationText : ["",""],
                    rewindNav : false,
                    scrollPerPage : false,
                    pagination : false,
                    paginationNumbers: false,
                });
            });
        }, 1)
    }

}