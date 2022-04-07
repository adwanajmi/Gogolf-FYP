import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
import { take, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface info {
  // name: string;
  first_name: string;
  last_name: string;
  email: string;
  balance:string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.uid}`).valueChanges().pipe(
            take(1),
            tap(data => {
              data['id'] = user.uid;
              this.currentUser.next(data);
            })
          );
        } else {
          this.currentUser.next(null);
          return of(null);
        }
      })
    );
  }
  getinfo() {
    const user = this.afAuth.auth.currentUser.uid;
    return this.db.doc<info>(`users/${user}`).valueChanges();
  }
 
  getinfore(val) {
    return this.db.doc<info>(`users/${val}`).valueChanges();
  }
  updatebalance(val) {
    // console.log('save: ', note);
    // if (note.notebook) {
    //   note.notebook = this.afs.doc(`/notebooks/${note.notebook.id}`).ref;
    // }
    // console.log('save note now: ', note);
    const user = this.afAuth.auth.currentUser.uid;
   
    return this.db.doc(`users/${user}`).update(val);
  }
  updatebalancere(user2,val) {
   
    return this.db.doc(`users/${user2}`).update(val);
  }
  updateprofile(val) {
    // console.log('save: ', note);
    // if (note.notebook) {
    //   note.notebook = this.afs.doc(`/notebooks/${note.notebook.id}`).ref;
    // }
    // console.log('save note now: ', note);
    const user = this.afAuth.auth.currentUser.uid;
      // note.changed = firebase.firestore.FieldValue.serverTimestamp();
    return this.db.doc(`users/${user}`).update(val);
  }
  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      return this.db.doc(`users/${data.user.uid}`).set({
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        email: data.user.email,
        role: 'USER',
        permissions: [],
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    });
  }
getprofile(){
  return this.afAuth.auth.currentUser.uid;
  
}
  signIn(credentials): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.user.uid}`).valueChanges().pipe(
            take(1)
          );
        } else {
          return of(null);
        }
      })
    )
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (!this.currentUser.value || !this.currentUser.value.permissions.includes(perm)) {
        return false;
      }
    }
    return true;
  }
}
