import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
 
@Component({
  selector: 'app-addcash',
  templateUrl: './addcash.page.html',
  styleUrls: ['./addcash.page.scss'],
})
export class AddcashPage implements OnInit {
  scannedData: {};
  value: number;
  user2: string;
  balancevar: number;
  balancevare: number;
  updateval: boolean;
  constructor(private auth: AuthService) {
    this.auth.getinfo().subscribe(
      (a => {
        this.balancevar = +a.balance;
        console.log(this.balancevar);

      }))
      ;
    
    this.updateval = false;
  }

  ngOnInit() {
  }
  
  pay(u) {
    this.updateval = false;
    this.auth.getinfore(u).subscribe(
      (a => {
        this.balancevare = +a.balance;
        if (this.updateval == false) {
          this.updateval = true;
          this.balancevare = +this.balancevare + +this.value;
          this.auth.updatebalancere(this.user2,{ balance: +this.balancevare });
          console.log(this.balancevare);
        }
      })

    )
    // this.balancevare = this.balancevare + this.value

  

  }

}
