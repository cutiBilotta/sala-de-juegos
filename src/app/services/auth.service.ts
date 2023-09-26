import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private firestore: AngularFirestore) { }



  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


  async login(email: string, password: string) {
    try {
      const userCredential = await this.afauth.signInWithEmailAndPassword(email, password);
  
      if (!userCredential.user) {
        return null; // Usuario no encontrado
      }
  
      const user = userCredential.user;
  
      // Registrar la fecha de ingreso sin importar si es la primera vez
      const fechaIngreso = new Date();
      await this.firestore.collection('users').doc(user.uid).set({ fechaIngreso }, { merge: true });
  
      return user;
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }



/*
  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }*/

  getUserLogged() {
    return this.afauth.authState;
  }


  logout() {
    this.afauth.signOut();
  }

  getLastUser(){
      return this.firestore.collection('users', ref => ref.orderBy('fechaRegistro', 'desc').limit(1)).valueChanges();
  }
}