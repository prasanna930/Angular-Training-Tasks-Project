import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressformatComponent } from './addressformat.component';

describe('AddressformatComponent', () => {
  let component: AddressformatComponent;
  let fixture: ComponentFixture<AddressformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
