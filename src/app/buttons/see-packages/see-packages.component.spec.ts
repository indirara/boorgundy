import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePackagesComponent } from './see-packages.component';

describe('SeePackagesComponent', () => {
  let component: SeePackagesComponent;
  let fixture: ComponentFixture<SeePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
