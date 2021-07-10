import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-insta',
  templateUrl: './see-insta.component.html'
})
export class SeeInstaComponent implements OnInit {
  instaUrl = 'https://www.instagram.com/boorgundy/';
  text = 'SEE MORE ON INSTAGRAM';

  constructor() {}

  ngOnInit(): void {}

  seeInsta(): void {
    window.open(this.instaUrl);
  }

  seeWork(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
