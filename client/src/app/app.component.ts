import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //class properties
  title = 'Dating app';

  //constructor
  constructor (private accountService: AccountService) {}

  //methods
  ngOnInit(): void {
    this.setCurrentUser();
  }



  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrnetUser(user);
  }

}
