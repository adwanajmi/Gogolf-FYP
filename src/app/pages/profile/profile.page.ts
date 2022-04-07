import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { testUserAgent } from '@ionic/core';

export interface Myscore {
  // name: string;
  A: string;
  B: string;
  C: string;
  D: string;

  totalA: number;
  totalB: number;
  totalC: number;
  totalD: number;
  Ap: boolean;
  Bp: boolean;
  Cp: boolean;
  Dp: boolean;

  date: Date;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  scores: Observable<Myscore[]>;
  id: string;
  first;
  last;
  email;
  phone;
  isEdit:boolean;

  private imageCollection: AngularFirestoreCollection<Myscore>;


  constructor(private navCtrl: NavController, private auth: AuthService, private db: AngularFirestore) {
    this.id = this.auth.getprofile();

    this.imageCollection = db.collection<Myscore>('scores', ref => ref.where('user', '==', this.id).orderBy('date2','asc') );

    this.scores = this.imageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Myscore;
        const id = a.payload.doc.id;
        console.log(id);
        return { id, ...data };
      }))
    );
    this.auth.getinfo().subscribe(
      (a => {
        this.first = a.first_name;
        this.last = a.last_name;
        this.email = a.email;
        console.log(this.first + this.last + this.email);

      }))
      ;

    // let documentRef = db.doc('scores/' + this.id+'/scores/'+this.dataid);

    // documentRef.get().subscribe((documentSnapshot) => {
    //   if (documentSnapshot.exists) {
    //     const data = documentSnapshot.data();
    //     this.totalscore = data.total;


    //     console.log(`Data: ` + this.totalscore);
    //   }
    // });


  }
  ngOnInit() {

  }
  editprofile(){
    this.isEdit =!this.isEdit;
  }
  update(){
    this.isEdit =false;
  
  let a = {
    first_name:this.first,
    last_name:this.last,
  }
    this.auth.updateprofile(a);
  }
}
