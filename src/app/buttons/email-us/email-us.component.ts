import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-us',
  templateUrl: './email-us.component.html'
})
export class EmailUsComponent implements OnInit {
  text = 'SEND US A MESSAGE';
  email = 'boorgundy@gmail.com';

  constructor() {}

  ngOnInit(): void {}

  sendEmail(): void {
    location.href = `mailto:${this.email}`;
  }
}
