import { BrowserModule } from '@angular/platform-browser'; // Ele prepara a aplicação para ser rodada em um browser
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //two-away data bind usa a diretiva do módulo de form

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import { CursosModule } from './cursos/cursos.module'; //Lembre sempre de organizar seus components, boa prática.

@NgModule({ //O @ngModule é um decorator importado do angular core
  declarations: [ //Declarations é um metadado que reune os componentes, diretivas e Pipes declarados dentro do NgModule
    AppComponent, //Aqui são os arquivos declarados no nosso projeto
    MeuPrimeiroComponentComponent
  ],
  imports: [ // o import também é um metadado, onde nós colocamos outros módulos ao qual queremos utilizar dentro do nosso módulo appcomponent ou então dentro de um componente pertecente a este módulo.
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule, //Importamos o CursosModule para que possamos utilizá-lo em nosso app componnent
  ],
  providers: [], //Nos providers ficarão os serviços que ficarão disponíveis para todos os componentes declarado neste módulo e o serviço aqui por ser o appModule fica como escopo para toda aplicação (verificação de login, rotas e etc. Colocamos aqui)
  bootstrap: [AppComponent] // Aqui teremos apenas no módulo raíz do nosso projeto. O componente a ser instanciado quando executarmos a aplicação, será o componente que servirá como container do nosso projeto, aqui estamos instanciando o app componnent e todo o nosso código do app fica la, e lá ser declarado as rotas e ou o menu da nossa aplicação, o nosso viewPort
})
export class AppModule { } 

//Criamos módulos de aplicação para organizar melhor o nosso código
//Criando um módulo: ng g m nome do módulo