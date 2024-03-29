import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

//--------------

import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AlertController , ToastController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { Reference } from '@angular/fire/storage/interfaces';
import { Url } from 'url';

export interface User {
   uid:string;
   Name:string;
   address?:string;
   date?:string;
   email?:string;
   gender?:string;
   phone?:string;
   touron?:boolean;
   imgsrc?:string;
}
@Injectable({
  providedIn: 'root'
})

export class UserDateService {
  user: Observable<User>;
  
  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    private router: Router){
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if(user) {
            return this.db.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );  
  }


}

