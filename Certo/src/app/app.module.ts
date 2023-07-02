import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgendasService } from './services/agendas.service';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      AngularFirestoreModule.enablePersistence(),
      AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AgendasService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
