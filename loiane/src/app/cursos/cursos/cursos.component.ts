import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service' // Importamos o cursosService para ser usado

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string; //Criamos a variável que irá receber a Url do nosso curso e tipamos ela como string

  cursos: string[];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = "http://loiane.training"; //Aqui é código JS dentro do componente. Estamos referenciando o nomePortal através do this

    // var servico = new CursosService(); //Assim se faz uma instância de classes no JS ou TS. 
    
    this.cursos = this.cursosService.getCursos()

  }

  ngOnInit(): void {
  }

}
