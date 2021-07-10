import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeInstaComponent } from './see-insta.component';

describe('SeeInstaComponent', () => {
  let component: SeeInstaComponent;
  let fixture: ComponentFixture<SeeInstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeInstaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
