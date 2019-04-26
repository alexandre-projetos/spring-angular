import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuLateralEsquerdoComponent } from './menu-lateral-esquerdo/menu-lateral-esquerdo.component';
import { DesignComponent } from './design.component';

const COMPONENTS_EXPORT = [
    HeaderComponent,
    MenuLateralEsquerdoComponent,
    FooterComponent,
    DesignComponent
];

@NgModule({
    declarations: [COMPONENTS_EXPORT],
    imports: [
        CommonModule
    ],
    exports: [COMPONENTS_EXPORT]
})
export class DesignModule { }
