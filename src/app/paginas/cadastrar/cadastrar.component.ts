import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
  }

  cadastrarUsuario(nome: string, cpf: string, email: string, dataNascimento: string) {
    const usuario = {
      nome: nome,
      cpf: cpf,
      email: email,
      dataNascimento: dataNascimento
    };
    this.usuariosService.adicionarUsuario(usuario);
    this.usuarios = this.usuariosService.getUsuarios();
  }
}
