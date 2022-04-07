import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, AlertController } from '@ionic/angular';

export interface hour {
  // name: string;
  name: number;
  price: number;

}
export interface aus {
  // name: string;
  description: string;

}
@Component({
  selector: 'app-setprice',
  templateUrl: './setprice.page.html',
  styleUrls: ['./setprice.page.scss'],
})
export class SetpricePage implements OnInit {
  
  private imageCollection: AngularFirestoreCollection<hour>;
  private imageCollection2: AngularFirestoreCollection<aus>;

  hours: Observable<hour[]>;
  aboutus: Observable<aus[]>;

  // private usersCollection: AngularFirestoreDocument<MyData3>;
newname;
newprice;
newdesc;
  constructor(private alertController: AlertController,private navCtrl: NavController, private auth: AuthService, private db: AngularFirestore) {
    this.imageCollection = db.collection<hour>('hours', ref => ref.orderBy('name','asc' ));
    this.imageCollection2 = db.collection<aus>('aboutus');

    // this.usersCollection = db.collection<MyData3>('users').doc(this.id);

    this.hours = this.imageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as hour;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.aboutus = this.imageCollection2.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as aus;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }
  ngOnInit() {
    
  }
  edit(x){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('hours').doc(x).update({ 
        price: +this.newprice
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
  editaus(x){
    return new Promise<any>((resolve, reject) => {
      this.db.collection('aboutus').doc(x).update({ 
        description: this.newdesc
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
  async presentAlertPrompt(x) {
    const alert = await this.alertController.create({
      header: 'Edit price',
      inputs: [
        
        {
          name: 'price1',
          placeholder: 'Price'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.newprice = +data.price1;
            this.edit(x);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt2(x) {
    const alert = await this.alertController.create({
      header: 'Edit About us',
      inputs: [
        
        {
          name: 'aus',
          placeholder: 'About Us'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.newdesc = data.aus;
            this.editaus(x);
          }
        }
      ]
    });

    await alert.present();
  }
}
