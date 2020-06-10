import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLacamento: new Date(2016, 5, 23),
    url: 'http://robotib.com'

  };

  livros: string[] = ['Python', 'Reactibilidade'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros);
  }

  transform(){

  }

  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v){
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  }


  constructor() { }

  ngOnInit() {
  }

}
