import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioBuscaComponent } from './usuario/usuario-busca.component';
import { AdminComponent } from './admin.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';

const COMPONENTS_EXPORT = [
  AdminComponent,
  UsuarioBuscaComponent,
  UsuarioCadastroComponent
];

@NgModule({
  declarations: [COMPONENTS_EXPORT],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [COMPONENTS_EXPORT]
})
export class AdminModule { }
