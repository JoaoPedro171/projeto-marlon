import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listaLivros: any = null;
  GeneroAtual: string = 'fiction';
  p: number = 1;

  constructor(private http: HttpClient) {
    console.log('oi construtor');
  }

  ngOnInit(): void {
    console.log('oi init');
    this.LivroGenero(this.GeneroAtual);
  }

  MudancaGenero(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.GeneroAtual = selectElement.value;
    this.LivroGenero(this.GeneroAtual);
  }

  LivroGenero(genre: string): void {
    this.http.get(`https://openlibrary.org/search.json?q=subject:${genre}`)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.listaLivros = data.docs;
        },
        error: (error: any) => {
          console.log(error);
          this.listaLivros = null;
        }
      });
  }
}
