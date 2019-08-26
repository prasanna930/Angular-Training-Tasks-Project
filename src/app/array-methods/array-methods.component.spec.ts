import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMethodsComponent } from './array-methods.component';

describe('ArrayMethodsComponent', () => {
  let component: ArrayMethodsComponent;
  let fixture: ComponentFixture<ArrayMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
