import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, AlertController } from '@ionic/angular';

export interface MyData {
  // name: string;
  title: string;
  description: string;
}
export interface MyData2 {
  // name: string;
  title: string;
  review: string;
}


@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"]
})


export class NewsPage implements OnInit {
  news: Observable<MyData[]>;
  reviewform: FormGroup;
  reviews: Observable<MyData2[]>;
  existingcust: boolean;
  updaterating: string;
  id: string;
  firstname:string;
  lastname:string;
  role:boolean;
  newtitle:string;
  newdesc:string;
  private imageCollection: AngularFirestoreCollection<MyData>;
  private reviewsCollection: AngularFirestoreCollection<MyData2>;
  // private usersCollection: AngularFirestoreDocument<MyData3>;

  constructor(private alertController: AlertController,private navCtrl: NavController, private auth: AuthService, private fb: FormBuilder, private db: AngularFirestore) {
    this.id = this.auth.getprofile();
    this.imageCollection = db.collection<MyData>('news');
    this.reviewsCollection = db.collection<MyData2>('reviews');
    // this.usersCollection = db.collection<MyData3>('users').doc(this.id);

    this.news = this.imageCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MyData;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.reviews = this.reviewsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MyData2;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.id = this.auth.getprofile();
    let documentRef = db.doc('users/' + this.id);

    documentRef.get().subscribe((documentSnapshot) => {
      if (documentSnapshot.exists) {
        const data = documentSnapshot.data();
        this.existingcust = data.customer;
        this.firstname = data.first_name;
        this.lastname = data.last_name;
        if(data.role == "ADMIN"){
          this.role=true;

        }
        else{
          this.role=false;

        }

        console.log(`Data: ` + this.existingcust);
      }
    });
    // this.users = this.usersCollection.get().forEach(
    //   actions =>{
    //     const data = actions.data();
    //     const id = actions.id;
    //     this.existingcust = data;
    //     return { id, ...data };
    //   }
    // );
    // console.log(this.existingcust);

  }
  addnews() {
    
    let news = {
      title: this.newtitle ,
      description: this.newdesc
    };

    this.db.collection('news').add(news);
    this.navCtrl.navigateForward('news');
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Add news',
      inputs: [
        
        {
          name: 'titlenew',
          placeholder: 'Title'
        },
        {
          name: 'descnew',
          placeholder: 'Description'
        },
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
            this.newtitle = data.titlenew;
            this.newdesc = data.descnew;

            this.addnews();
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
    this.reviewform = this.fb.group({
      review: ['', [Validators.required]],
      stars: ['', [Validators.required]]

    });
  }
  updatecustomer(){
    this.existingcust = false;
    return new Promise<any>((resolve, reject) => {
      this.db.collection('users').doc(this.id).update({customer:this.existingcust})
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  submitreview() {
    
    let reviewjson = {
      review: this.reviewform.value.review,
      stars: this.reviewform.value.stars,
      title:this.firstname+" "+this.lastname
    };

    this.db.collection('reviews').add(reviewjson);
    this.navCtrl.navigateForward('app/news');
this.updatecustomer();
  }
  onRateChange(event) {
    console.log('Your rate:', event);
  }
  test() {
    console.log(this.reviewform.value);
  }
}
