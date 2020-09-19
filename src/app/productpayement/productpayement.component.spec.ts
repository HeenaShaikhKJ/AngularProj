import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductpayementComponent } from './productpayement.component';

describe('ProductpayementComponent', () => {
  let component: ProductpayementComponent;
  let fixture: ComponentFixture<ProductpayementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductpayementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductpayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
