import { Routes, RouterModule } from '@angular/router';
import { ModHomePageComponent } from './pages/home_page/home_page.component';
import { ModDangkyPageComponent } from './pages/dangky_page/dangky_page.component';
import { ChiTietSanPhamComponent } from './pages/chi_tiet_san_pham/chi_tiet_san_pham.component';

const appRoute = [
    {
        path: "",
        component: ModHomePageComponent
    },
    {
        path: "dang-ky",
        component: ModDangkyPageComponent
    },
    {
        path: "chi-tiet-san-pham/:id_san_pham",
        component: ChiTietSanPhamComponent
    }

];

export const routing = RouterModule.forRoot(appRoute);