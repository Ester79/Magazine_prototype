import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialactionsComponent } from './socialactions.component';

describe('SocialactionsComponent', () => {
  let component: SocialactionsComponent;
  let fixture: ComponentFixture<SocialactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
