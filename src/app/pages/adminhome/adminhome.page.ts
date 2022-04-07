import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.signOut();
  }
}
