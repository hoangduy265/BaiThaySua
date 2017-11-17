import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
    selector: 'content_topseller',
    templateUrl: '/app/modules/module_content_topseller/module_content_topseller.component.html'
})
export class ModContentTopseller implements OnInit {
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

    ngOnInit() {
        
            
     }
     ngAfterViewInit() {
         //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
         //Add 'implements AfterViewInit' to the class.

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
         
     }
     ngAfterContentInit() {
         //Called after ngOnInit when the component's or directive's content has been initialized.
         //Add 'implements AfterContentInit' to the class.
         
         
     }

    
    
}