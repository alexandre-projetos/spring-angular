import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsuarioBuscaComponent } from './usuario/usuario-busca.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: PrincipalComponent
            },
            {
                path: 'configuracoes',
                component: ConfiguracoesComponent
            },
            {
                path: 'usuarios',
                children: [
                    {
                        path: '',
                        component: UsuarioBuscaComponent,
                    },
                    {
                        path: 'cadastro',
                        component: UsuarioCadastroComponent
                    },
                    {
                        path: ':id/atualizacao',
                        component: UsuarioCadastroComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
