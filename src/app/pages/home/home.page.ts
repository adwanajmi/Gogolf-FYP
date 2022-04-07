import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface hour {
  // name: string;
  name: number;
  price: number;
   1:number;
   2:number;
   3:number;
   4:number;
   5:number;
   6:number;
   7:number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage {

  eventSource = [];
  date: number;
  timeselect: number;
  startcheck: string;
  coursecheck: string;
  courseselect: string;
  counter = 0;
  id: string;
  checkday:any;
  checkdate: number;
  bookedcheck: string[] = [];
  bookedcheckinverse: string[] = [];
  courses: string[] = ["9 holes", "18 holes"];
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();
  user2: string = 'SwAVL8HfTmQ9T80hlaDEkk1WPMm2';
  balancevar: number = 0;
  balancevare: number = 0;
  updateval: boolean;
  value: number = 0;

  constructor(private auth: AuthService, private navCtrl: NavController, private db: AngularFirestore) {
    this.id = this.auth.getprofile();
    this.auth.getinfo().subscribe(
      (a => {
        this.balancevar = +a.balance;
        console.log(this.balancevar);

      }))
      ;


  }

  addNewEvent() {
    let start = this.selectedDate;
    let end = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    start.setHours(this.timeselect);
    let endhour = +this.timeselect + 2;
    end.setHours(endhour);

    console.log("start is " + start);
    console.log("end is " + end)

    let event = {
      title: 'Booked' ,
      startTime: start,
      endTime: end,
      creator: this.id,
      course: this.courseselect,
      date: start.getDate(),
      date2:start.getTime(),
      allDay: false,
    };

    this.db.collection('events').add(event);
    this.navCtrl.navigateForward('app/mybookings');
    this.updatecustomer();
    this.bookedcheckinverse = null;
  }
  updatecustomer() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('users').doc(this.id).update({ customer: true })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
    this.checkday = ev.selectedTime.getDay();
    console.log("day is"  + this.checkday);
    
  }

  onCurrentDateChanged(event: Date) {
    this.date = event.getDate();

    this.db.collection('events', ref => ref.where('date', '==', event.getDate())).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      this.counter = 0;
      this.bookedcheckinverse = ["8", "10", "12", "14", "16", "18", "20", "22"];

      colSnap.forEach(snap => {
        let event2: any = snap.payload.doc.data();
        event2.id = snap.payload.doc.id;
        event2.startTime = event2.startTime.toDate();
        event2.endTime = event2.endTime.toDate();
        this.startcheck = event2.startTime.getHours();
        this.coursecheck = event2.course;
        this.checkdate = event2.date;
        if (this.startcheck && this.checkdate == event.getDate()) {
          this.bookedcheck[this.counter] = this.startcheck;
          this.bookedcheckinverse = this.bookedcheckinverse.filter(h => h != this.bookedcheck[this.counter]);
          console.log(this.bookedcheckinverse);
          this.counter++;
        }

        this.eventSource.push(event2);
      });
    });
  }
  test() {
    console.log("success bos");
    console.log(this.timeselect)

    // this.eventSource = [];
    // let ev: any;
    // this.eventSource.push(ev);
    this.db.collection<hour>('hours', ref => ref.where('name', '==', +this.timeselect)).snapshotChanges().subscribe(colSnap => {
      colSnap.forEach(snap => {
        let event: any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        console.log("price for day" + event[4]);
        if (this.courseselect == "9 holes") {
          this.value = +event.price;
        }
        else if (this.courseselect == "18 holes") {
          this.value = +event.price;
          this.value = this.value * 2;
        }
        this.value = this.value*event[this.checkday];
      });
    });
  }

  selection() {
    this.bookedcheckinverse = null;
    this.timeselect = null;
  }
  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }
  pay() {

    // this.balancevare = this.balancevare + this.value
    if (this.balancevar >= this.value) {
      this.updateval = false;
      this.auth.getinfore(this.user2).subscribe(
        (a => {
          this.balancevare = +a.balance;
          if (this.updateval == false) {
            this.updateval = true;
            this.balancevare = +this.balancevare + +this.value;
            this.auth.updatebalancere(this.user2, { balance: +this.balancevare });
            console.log(this.balancevare);
          }
        })

      )
      this.balancevar = this.balancevar - this.value;
      this.auth.updatebalance({ balance: this.balancevar });
      this.addNewEvent();
    }
    else {
      console.log('not enough balance')
    }
  }
}
