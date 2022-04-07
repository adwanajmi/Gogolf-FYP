import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

export interface MyData {
  // name: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  aboutus: Observable<MyData[]>;
  existingcust: boolean;
  updaterating: string;
  id: string;
  firstname:string;
  lastname:string;
  private imageCollection: AngularFirestoreCollection<MyData>;
  // private usersCollection: AngularFirestoreDocument<MyData3>;

  constructor(private navCtrl: NavController, private db: AngularFirestore) {
    this.imageCollection = db.collection<MyData>('aboutus');
    // this.usersCollection = db.collection<MyData3>('users').doc(this.id);

    this.aboutus = this.imageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MyData;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  

  }
  ngOnInit() {
    
  }
  

}
