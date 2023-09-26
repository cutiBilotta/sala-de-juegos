import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RegistroComponent } from './components/registro/registro.component';



const firebaseConfig = {
  apiKey: "AIzaSyAk-Xu0-cCyq3rR9UBcH4B_9HlK3--3rwQ",
  authDomain: "sala-de-juegos-a3ec6.firebaseapp.com",
  projectId: "sala-de-juegos-a3ec6",
  storageBucket: "sala-de-juegos-a3ec6.appspot.com",
  messagingSenderId: "755446427513",
  appId: "1:755446427513:web:984ca860e894c5d0b8c9a8"
}




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    NotFoundComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
