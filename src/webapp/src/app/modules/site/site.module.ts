import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site-routing.module';

const COMPONENTS_EXPORT = [
  SiteComponent
];

@NgModule({
  declarations: [COMPONENTS_EXPORT],
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  exports: [COMPONENTS_EXPORT]
})
export class SiteModule { }
