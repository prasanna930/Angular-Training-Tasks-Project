import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeventpatternComponent } from './formeventpattern.component';

describe('FormeventpatternComponent', () => {
  let component: FormeventpatternComponent;
  let fixture: ComponentFixture<FormeventpatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeventpatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeventpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
