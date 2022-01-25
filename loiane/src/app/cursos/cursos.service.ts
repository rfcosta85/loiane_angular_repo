import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular']; //Passamos o array para o serviço, deixando o componente apenas com a lógica. Agora precisaremos utilizar a classe CursosServices dentro do cursos.components.ts
  }
}
