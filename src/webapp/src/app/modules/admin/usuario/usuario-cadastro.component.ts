import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-usuario-cadastro',
    templateUrl: './usuario-cadastro.component.html'
})
export class UsuarioCadastroComponent implements OnInit {

    title = 'Cadastro de Usuário';
    id;

    constructor(private activatedRoute: ActivatedRoute) {

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];

            if (this.id) {
                this.title = 'Atualização do Usuário';
            }
        });
    }

    ngOnInit() {
    }

}
