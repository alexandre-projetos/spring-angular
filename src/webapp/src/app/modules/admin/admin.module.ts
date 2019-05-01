import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsuarioBuscaComponent } from './usuario/usuario-busca.component';
import { AdminComponent } from './admin.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { DesignModule } from '../design/design.module';
import { PrincipalComponent } from './principal/principal.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const COMPONENTS_EXPORT = [
  AdminComponent,
  UsuarioBuscaComponent,
  UsuarioCadastroComponent,
  PrincipalComponent,
  ConfiguracoesComponent
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
