import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios: any[] = [];

  constructor() { }

  adicionarUsuario(usuario: any) {
    this.usuarios.push(usuario);
  }

  getUsuarios() {
    return this.usuarios;
  }

  limparUsuarios() {
    this.usuarios = [];
  }
}
