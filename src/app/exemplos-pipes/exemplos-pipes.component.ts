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

  constructor() { }

  ngOnInit() {
  }

}
