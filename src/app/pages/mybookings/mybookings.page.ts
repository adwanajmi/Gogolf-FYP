import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface booking {
  course:string;
  startTime:Date;
  endTime:Date;
 }

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.page.html',
  styleUrls: ['./mybookings.page.scss'],
})
export class MybookingsPage implements OnInit {

  id:string;
  bookings: Observable<booking[]>;
  start;
  end;
  
  private imageCollection: AngularFirestoreCollection<booking>;
  
    constructor(private auth: AuthService,private db: AngularFirestore) {
      this.id = this.auth.getprofile();
      
     }
  
    ngOnInit() {
    }
    ionViewWillEnter(){
      this.imageCollection = this.db.collection<booking>('events', ref => ref.orderBy('date2','asc' ).where('creator', '==', this.id));
  
      this.bookings = this.imageCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as booking;
          const id = a.payload.doc.id;
          
          console.log(id);
          return { id, ...data };
        }))
      );
    }
}
