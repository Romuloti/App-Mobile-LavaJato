import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  public produtos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.produtos = [

            {nome: '1. Americana', preco: 30.00},
            {nome: '2. Cera-Pasta', preco: 15.00},
            {nome: '3. Cera-Liquida', preco: 10.00},
            {nome: '4. Simples', preco: 15.00},
            {nome: '5. Tapete-Residencial', preco: 35.00},
            {nome: '6. Motor', preco: 20.00},
            {nome: '7. Polimento', preco: 150.00},
            {nome: '8. Higienizacao', preco: 80.00}
          ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
