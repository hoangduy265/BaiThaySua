import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
//App
import { AppComponent }  from './app.component';

//Header
import  { ModHeader } from './widgets/module_header/module_header.component';
import { ModHeaderTopMenu } from './widgets/module_header/module_header_topmenu/module_header_topmenu.component';
import { ModHeaderNavigation } from './widgets/module_header/module_header_navigation/module_header_navigation.component';


//Content home_page
import { ModHomepage } from './pages/home_page/homepage.component';
import { ModContentTopseller } from './modules/module_content_topseller/module_content_topseller.component';
import { ModContentFeatured } from './modules/module_content_featured/module_content_featured.component';
import { ModContentSlider } from './modules/module_content_slider/module_content_slider.component';

// Content Contact Page
import { ModContactPage } from './pages/contact_page/contactpage.component';
import { ModContentMap } from './modules/module_map/module_map.component';
import {ModContentFormContact } from './modules/module_formcontact/module_formcontact.component'


//Content Dang Ky Page
import { ModDangKyComponent } from './pages/dang_ky/dang_ky.component';
import { ModFormDangKyComponent } from './modules/module_form_dang_ky/module_form_dang_ky.component';

//Footer
import { ModFooter } from './widgets/module_footer/module_footer.component';
import { ModFooterTop } from './widgets/module_footer/module_footer_top/module_footer_top.component';
import { ModFooterBottom } from './widgets/module_footer/module_footer_bottom/module_footer_bottom.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
   AppComponent ,
   ModHeader, 
   ModHeaderTopMenu, 
   ModHeaderNavigation,    
   ModHomepage, 
   ModContentSlider,
   ModContentTopseller,
   ModContentFeatured,
   ModContactPage,
   ModContentMap,
   ModContentFormContact,
   ModFooter,
   ModFooterTop,
   ModFooterBottom,
   ModDangKyComponent,
   ModFormDangKyComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
