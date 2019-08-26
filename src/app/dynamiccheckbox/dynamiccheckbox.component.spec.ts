import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccheckboxComponent } from './dynamiccheckbox.component';

describe('DynamiccheckboxComponent', () => {
  let component: DynamiccheckboxComponent;
  let fixture: ComponentFixture<DynamiccheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
