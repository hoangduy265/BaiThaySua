import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

//pages
import { ModHomePageComponent }  from './pages/home_page/home_page.component';
import { ModContactPageComponent }  from './pages/contact_page/contact_page.component';
import { ModDangkyPageComponent }  from './pages/dangky_page/dangky_page.component';

//modules
import { ModSliderComponent }  from './modules/module_slider/module_slider.component';
import { ModHotProductComponent }  from './modules/module_hotproduct/module_hotproduct.component';
import { ModContentComponent }  from './modules/module_content/module_content.component';
import { ModDSGiayComponent }  from './modules/module_dsgiay/module_dsgiay.component';
import { ModChatComponent }  from './modules/module_chat/module_chat.component';
import { ModContactComponent }  from './modules/module_contact/module_contact.component';
import { ModFormdangkyComponent }  from './modules/module_formdangky/module_formdangky.component';
import { ChiTietSanPhamComponent } from './pages/chi_tiet_san_pham/chi_tiet_san_pham.component';

//widgets
import { ModHeaderComponent }  from './widgets/module_header/module_header.component';
import { ModMenuComponent }  from './widgets/module_menu/module_menu.component';
import { ModFooter1Component }  from './widgets/module_footer1/module_footer1.component';
import { ModFooter2Component }  from './widgets/module_footer2/module_footer2.component';

//service
import { SanPhamService }  from './services/san_pham.service';
import { LoginService }  from './services/login/login.service';


//routing
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
                  ModHomePageComponent,
                  ModContactPageComponent,
                  ModSliderComponent,
                  ModHotProductComponent,
                  ModContentComponent,
                  ModDSGiayComponent,
                  ModChatComponent,
                  ModContactComponent,
                  ModHeaderComponent,
                  ModMenuComponent,
                  ModFooter1Component,
                  ModFooter2Component,
                  ModDangkyPageComponent,
                  ModFormdangkyComponent,
                  ChiTietSanPhamComponent
                  ],
  providers:[ SanPhamService, LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
