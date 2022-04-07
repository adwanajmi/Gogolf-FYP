import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],

})
export class ScorecardPage implements OnInit {
  form18: FormGroup;

  totalA: number;
  totalB: number;
  totalC: number;
  totalD: number;
  limit: number = 40;
  Ap: boolean;
  Bp: boolean;
  Cp: boolean;
  Dp: boolean;
  id: string;
  constructor(private auth: AuthService, private db: AngularFirestore, private fb: FormBuilder ) {




  }
  ngOnInit() {
    this.id = this.auth.getprofile();

    this.form18 = this.fb.group({

      A: [''],
      B: [''],
      C: [''],
      D: [''],

      A1: [''],
      B1: [''],
      C1: [''],
      D1: [''],

      A2: [''],
      B2: [''],
      C2: [''],
      D2: [''],

      A3: [''],
      B3: [''],
      C3: [''],
      D3: [''],

      A4: [''],
      B4: [''],
      C4: [''],
      D4: [''],

      A5: [''],
      B5: [''],
      C5: [''],
      D5: [''],

      A6: [''],
      B6: [''],
      C6: [''],
      D6: [''],

      A7: [''],
      B7: [''],
      C7: [''],
      D7: [''],

      A8: [''],
      B8:[''],
      C8: [''],
      D8: [''],

      A9: [''],
      B9: [''],
      C9: [''],
      D9: [''],

      A10: [''],
      B10: [''],
      C10: [''],
      D10: [''],

      A11: [''],
      B11: [''],
      C11: [''],
      D11: [''],

      A12: [''],
      B12: [''],
      C12: [''],
      D12: [''],

      A13: [''],
      B13: [''],
      C13: [''],
      D13: [''],

      A14: [''],
      B14: [''],
      C14: [''],
      D14: [''],

      A15: [''],
      B15: [''],
      C15: [''],
      D15: [''],

      A16: [''],
      B16: [''],
      C16: [''],
      D16: [''],

      A17: [''],
      B17: [''],
      C17: [''],
      D17: [''],

      A18: [''],
      B18: [''],
      C18: [''],
      D18:['']


    });
    }
  
  submit18() {
    const date = new Date();
    var win = false;
    this.totalA = +this.form18.value.A1 + +this.form18.value.A2 + +this.form18.value.A3 + +this.form18.value.A4 + +this.form18.value.A5 + +this.form18.value.A6 + +this.form18.value.A7 + +this.form18.value.A8 + +this.form18.value.A9+ +this.form18.value.A10 + +this.form18.value.A11+ +this.form18.value.A12 + +this.form18.value.A13 + +this.form18.value.A14 + +this.form18.value.A15 + +this.form18.value.A16 + +this.form18.value.A17 + +this.form18.value.A18 ;
    this.totalB = +this.form18.value.B1 + +this.form18.value.B2 + +this.form18.value.B3 + +this.form18.value.B4 + +this.form18.value.B5 + +this.form18.value.B6 + +this.form18.value.B7 + +this.form18.value.B8 + +this.form18.value.B9+ +this.form18.value.B10 + +this.form18.value.B11+ +this.form18.value.B12 + +this.form18.value.B13 + +this.form18.value.B14 + +this.form18.value.B15 + +this.form18.value.B16 + +this.form18.value.B17 + +this.form18.value.B18 ;
    this.totalC = +this.form18.value.C1 + +this.form18.value.C2 + +this.form18.value.C3 + +this.form18.value.C4 + +this.form18.value.C5 + +this.form18.value.C6 + +this.form18.value.C7 + +this.form18.value.C8 + +this.form18.value.C9+ +this.form18.value.C10 + +this.form18.value.C11+ +this.form18.value.C12 + +this.form18.value.C13 + +this.form18.value.C14 + +this.form18.value.C15 + +this.form18.value.C16 + +this.form18.value.C17 + +this.form18.value.C18 ;
    this.totalD = +this.form18.value.D1 + +this.form18.value.D2 + +this.form18.value.D3 + +this.form18.value.D4 + +this.form18.value.D5 + +this.form18.value.D6 + +this.form18.value.D7 + +this.form18.value.D8 + +this.form18.value.D9+ +this.form18.value.D10 + +this.form18.value.D11+ +this.form18.value.D12 + +this.form18.value.D13 + +this.form18.value.D14 + +this.form18.value.D15 + +this.form18.value.D16 + +this.form18.value.D17 + +this.form18.value.D18 ;
    if (this.totalA > this.totalB || this.totalA > this.totalC || this.totalA > this.totalD) {
      win = true;
    }
    if (this.totalA > this.limit) {
      this.Ap = true;
    }
    else {
      this.Ap = false;

    }
    if (this.totalB > this.limit) {
      this.Bp = true;
    }
    else {
      this.Bp = false;

    }
    if (this.totalC > this.limit) {
      this.Cp = true;
    }
    else {
      this.Cp = false;

    }
    if (this.totalD > this.limit) {
      this.Dp = true;
    }
    else {
      this.Dp = false;

    }
    console.log(this.totalA);
    console.log(this.totalB);
    console.log(this.totalC);
    console.log(this.totalD);
    this.db.collection('scores').add({
      A: this.form18.value.A,
      B: this.form18.value.B,
      C: this.form18.value.C,
      D: this.form18.value.D,
      totalA: this.totalA,
      totalB: this.totalB,
      totalC: this.totalC,
      totalD: this.totalD,
      user: this.id,
      date: date,
      date2:date.getTime(),
      win: win,
      Ap: this.Ap,
      Bp: this.Bp,
      Cp: this.Cp,
      Dp: this.Dp

    })
    console.log(date);

  }

}
