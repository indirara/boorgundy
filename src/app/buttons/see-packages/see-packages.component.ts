import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-packages',
  templateUrl: './see-packages.component.html',
})
export class SeePackagesComponent implements OnInit {
  text = 'SEE OUR PACKAGES';

  constructor() {}

  ngOnInit(): void {}

  scrollToPackages(): void {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }
}
