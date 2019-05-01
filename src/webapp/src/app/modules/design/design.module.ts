import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuLateralEsquerdoComponent } from './menu-lateral-esquerdo/menu-lateral-esquerdo.component';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design.routing.module';

const COMPONENTS_EXPORT = [
    HeaderComponent,
    MenuLateralEsquerdoComponent,
    DesignComponent
];

@NgModule({
    declarations: [COMPONENTS_EXPORT],
    imports: [
        CommonModule,
        DesignRoutingModule
    ],
    exports: [COMPONENTS_EXPORT]
})
export class DesignModule { }

