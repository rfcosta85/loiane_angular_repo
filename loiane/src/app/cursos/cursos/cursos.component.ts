import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string; //Criamos a variável que irá receber a Url do nosso curso e tipamos ela como string

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];
  
  constructor() { 
    this.nomePortal = "http://loiane.training"; //Aqui é código JS dentro do componente. Estamos referenciando o nomePortal através do this
  }

  ngOnInit(): void {
  }

}
