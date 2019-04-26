import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioBuscaComponent } from './usuario/usuario-busca.component';
import { AdminComponent } from './admin.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { DesignModule } from '../design/design.module';

const COMPONENTS_EXPORT = [
  AdminComponent,
  UsuarioBuscaComponent,
  UsuarioCadastroComponent
];

@NgModule({
  declarations: [COMPONENTS_EXPORT],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DesignModule
  ],
  exports: [COMPONENTS_EXPORT]
})
export class AdminModule { }
