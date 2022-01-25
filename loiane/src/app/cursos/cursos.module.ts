import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent], //Repare que ao criar o componente dentro da pasta certa, o mesmo será declarado no NgModule e importado neste projeto
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ] //Aqui precisamos declarar o exports para que os nossos elementos do cursos fique visível no appModule. Ou seja, tudo que queremos expor para outros módulos, precisa ser feito aqui dentro.
})
export class CursosModule { }

// Repare que no módulo de funcionalidades não terá o bootstrap que é exclusivo ao documento raíz.
// Aqui não precisamos do BrowserModule e sim o CommonMOdule, ele contém as suas diretiras e Pipes mais comuns que ficarão disponíveis dentro dos componentes desse módulo.
// Criando um componente para este módulo: ng g c nome do componente, dentro da ráiz do seu módulo. cursos