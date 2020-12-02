import { Component } from '@angular/core';

/**
 * Generated class for the ContatoFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contato-form',
  templateUrl: 'contato-form.html'
})
export class ContatoFormComponent {

  text: string;

  constructor() {
    console.log('Hello ContatoFormComponent Component');
    this.text = 'Cadastrar Usuário';
  }

  

  

}
