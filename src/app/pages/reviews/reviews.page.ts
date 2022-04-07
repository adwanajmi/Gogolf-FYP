import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';


export interface MyData2 {
  // name: string;
  title: string;
  review: string;
}
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  reviewform: FormGroup;
  reviews: Observable<MyData2[]>;
  existingcust: boolean;
  updaterating: string;
  id: string;
  firstname:string;
  lastname:string;
  date:string;
  private reviewsCollection: AngularFirestoreCollection<MyData2>;
  // private usersCollection: AngularFirestoreDocument<MyData3>;

  constructor(private navCtrl: NavController, private auth: AuthService, private fb: FormBuilder, private db: AngularFirestore) {
    this.id = this.auth.getprofile();
    this.reviewsCollection = db.collection<MyData2>('reviews', ref => ref.orderBy('date'));
    // this.usersCollection = db.collection<MyData3>('users').doc(this.id);

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
      title:this.firstname+" "+this.lastname,
      date:new Date()
    };

    this.db.collection('reviews').add(reviewjson);
    this.navCtrl.navigateForward('/reviews');
this.updatecustomer();
  }
  onRateChange(event) {
    console.log('Your rate:', event);
  }
  test() {
    console.log(this.reviewform.value);
  }
}
