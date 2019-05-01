import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsuarioBuscaComponent } from './usuario/usuario-busca.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
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
