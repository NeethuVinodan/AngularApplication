import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyitComponent } from './buyit.component';

describe('BuyitComponent', () => {
  let component: BuyitComponent;
  let fixture: ComponentFixture<BuyitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
