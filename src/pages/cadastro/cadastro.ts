import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ValidateConfirmPassword } from '../../validators/confirmPassword';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'cadastro'
})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth
    ) {
      this.registerForm = this.formbuilder.group({
        name: [null, [Validators.required, Validators.minLength(5)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(5)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(5), ValidateConfirmPassword]]
        

      })
  }

 submitForm(){
  //  console.log(this.registerForm.value);
  this.afAuth.auth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.passowrd)
  .then((response) => {
    this.presentAlert();
    this.navCtrl.push("cadastro");
    console.log("Usuário criado conforme solicitado!");
  })
  .catch((error) => {
    console.log("Erro ao criar usuário", error);
  })

  presentAlert(){
    let alert = this.alertCtrl.create({
      title: "Usuário",
      subTitle: "Usuário cadastrado com sucesso",
      buttons: ["ok"]
    })
    alert.present();
  }
 }

}
