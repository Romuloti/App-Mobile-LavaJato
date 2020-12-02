import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ListaPage } from '../pages/lista/lista';
import { FeedPage } from '../pages/feed/feed';
import { ContatoPage } from '../pages/contato/contato';
import { SobrePage } from '../pages/sobre/sobre';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaPage,
    FeedPage,
    ContatoPage,
    SobrePage,
    LoginPage,
    CadastroPage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaPage,
    FeedPage,
    ContatoPage,
    SobrePage,
    LoginPage,
    CadastroPage

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
